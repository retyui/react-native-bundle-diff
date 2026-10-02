// Builds a release JS bundle for ios and android in every tmp/<bundler>/ project from rn-versions.json.
// PLATFORM_TYPE makes react-native-bundle-discovery write <platform>-metro-stats.json
// (with Re.Pack, `react-native bundle` is handled by Re.Pack's commands).
//
// Usage: node scripts/build-bundles.mjs [--bundler metro|repack] [--concurrency N] [--name RN70 --version 0.70.15]

import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { getVersions } from './get-versions.mjs';

const PLATFORMS = ['ios', 'android'];

const { values: args } = parseArgs({
  options: {
    bundler: { type: 'string', default: 'metro' },
    concurrency: { type: 'string', short: 'j', default: '1' },
    name: { type: 'string' },
    version: { type: 'string' },
  },
});
const versions = getVersions(args);
const concurrency = Math.max(1, Number.parseInt(args.concurrency, 10) || 1);

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const projectsDir = join(root, 'tmp', args.bundler);

// Prefixes every output line with the job label so parallel logs stay readable
const pipeWithPrefix = (stream, out, prefix) => {
  let buffer = '';
  stream.on('data', (chunk) => {
    buffer += chunk;
    const lines = buffer.split('\n');
    buffer = lines.pop();
    for (const line of lines) out.write(`${prefix} ${line}\n`);
  });
  stream.on('end', () => {
    if (buffer) out.write(`${prefix} ${buffer}\n`);
  });
};

const run = (cmd, cwd, env, label) =>
  new Promise((resolvePromise, reject) => {
    const prefix = `[${label}]`;
    console.log(`${prefix} $ ${cmd}  (in ${cwd})`);
    const child = spawn(cmd, { cwd, shell: true, env: { ...process.env, ...env } });
    pipeWithPrefix(child.stdout, process.stdout, prefix);
    pipeWithPrefix(child.stderr, process.stderr, prefix);
    child.on('error', reject);
    child.on('close', (code) =>
      code === 0 ? resolvePromise() : reject(new Error(`exited with code ${code}`)),
    );
  });

const jobs = [];
for (const { id, version } of versions) {
  const projectDir = join(projectsDir, id);

  if (!existsSync(projectDir)) {
    console.warn(`⚠️  ${projectDir} not found, skipping`);
    continue;
  }

  for (const platform of PLATFORMS) {
    jobs.push({ id, version, platform, projectDir });
  }
}

const failed = [];

const buildBundle = async ({ id, version, platform, projectDir }) => {
  const label = `${id} ${platform}`;
  // Metro keeps its cache in os.tmpdir(); a separate TMPDIR per job keeps
  // parallel --reset-cache runs from wiping each other's cache
  const tmpDir = join(projectDir, `.metro-tmp-${platform}`);
  mkdirSync(tmpDir, { recursive: true });
  const statsPath = join(projectDir, `${platform}-metro-stats.json`);
  rmSync(statsPath, { force: true });

  try {
    await run(
      `npx react-native bundle --entry-file index.js --platform ${platform} --dev false --bundle-output ${platform}/main.jsbundle --assets-dest ${platform}/assets --reset-cache`,
      projectDir,
      { PLATFORM_TYPE: platform, TMPDIR: tmpDir },
      label,
    );
    // Re.Pack exits with code 0 even when the compilation fails
    if (!existsSync(statsPath)) {
      throw new Error(`${platform}-metro-stats.json was not created`);
    }
    console.log(`✅ ${label} (${version})`);
  } catch (error) {
    console.error(`❌ ${platform} bundle failed for ${id} (${version}): ${error.message}`);
    failed.push(label);
  }
};

console.log(`Building ${jobs.length} bundles with concurrency ${concurrency}`);

let next = 0;
const worker = async () => {
  while (next < jobs.length) {
    await buildBundle(jobs[next++]);
  }
};
await Promise.all(Array.from({ length: Math.min(concurrency, jobs.length) }, worker));

if (failed.length) {
  console.error(`\n❌ Failed: ${failed.join(', ')}`);
  process.exitCode = 1;
} else {
  console.log('\n✅ All bundles built');
}
