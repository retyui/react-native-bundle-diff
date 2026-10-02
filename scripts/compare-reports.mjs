// Compares tmp/<id>/<platform>-metro-stats.json of every two consecutive versions from
// rn-versions.json and writes <before>-<after>-<platform>.md reports to reports/.
//
// Usage: node scripts/compare-reports.mjs [--before RN70 --after RN71]

import { spawn } from 'node:child_process';
import { createWriteStream, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import rnVersions from './rn-versions.json' with { type: 'json' };

const PLATFORMS = ['ios', 'android'];

const { values: args } = parseArgs({
  options: {
    before: { type: 'string' },
    after: { type: 'string' },
  },
});

if (!args.before !== !args.after) {
  throw new Error('--before and --after must be passed together');
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const projectsDir = join(root, 'tmp');
const reportsDir = join(root, 'reports');
mkdirSync(reportsDir, { recursive: true });

const ids = rnVersions.versions.map(({ id }) => id);
const pairs = args.before
  ? [[args.before, args.after]]
  : ids.slice(1).map((after, i) => [ids[i], after]);

const compare = (before, after, output) =>
  new Promise((resolvePromise, reject) => {
    const cmd = `npx --yes react-native-bundle-discovery-cli compare --before ${before} --after ${after} --format markdown`;
    console.log(`$ ${cmd} > ${relative(root, output)}`);
    const child = spawn(cmd, { cwd: root, shell: true, stdio: ['ignore', 'pipe', 'inherit'] });
    child.stdout.pipe(createWriteStream(output));
    child.on('error', reject);
    child.on('close', (code) =>
      code === 0 ? resolvePromise() : reject(new Error(`exited with code ${code}`)),
    );
  });

const failed = [];

for (const [beforeId, afterId] of pairs) {
  for (const platform of PLATFORMS) {
    const label = `${beforeId}-${afterId}-${platform}`;
    const before = relative(root, join(projectsDir, beforeId, `${platform}-metro-stats.json`));
    const after = relative(root, join(projectsDir, afterId, `${platform}-metro-stats.json`));

    const missing = [before, after].filter((file) => !existsSync(join(root, file)));
    if (missing.length) {
      console.warn(`⚠️  ${label}: ${missing.join(', ')} not found, skipping`);
      continue;
    }

    try {
      await compare(before, after, join(reportsDir, `${label}.md`));
      console.log(`✅ ${label}`);
    } catch (error) {
      console.error(`❌ ${label}: ${error.message}`);
      failed.push(label);
    }
  }
}

if (failed.length) {
  console.error(`\n❌ Failed: ${failed.join(', ')}`);
  process.exitCode = 1;
} else {
  console.log('\n✅ All reports compared');
}
