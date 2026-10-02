// Creates one React Native project per version from rn-versions.json in tmp/<bundler>/
// and sets up react-native-bundle-discovery in its bundler config:
//   metro  - serializer in metro.config.js
//   repack - Re.Pack (Rspack) + BundleDiscoveryPlugin in rspack.config.mjs
//
// Usage: node scripts/create-projects.mjs [--bundler metro|repack] [--name RN70 --version 0.70.15]

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { getVersions } from './get-versions.mjs';

const { values: args } = parseArgs({
  options: {
    bundler: { type: 'string', default: 'metro' },
    name: { type: 'string' },
    version: { type: 'string' },
  },
});
const versions = getVersions(args);

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const projectsDir = join(root, 'tmp', args.bundler);
mkdirSync(projectsDir, { recursive: true });

const SEARCH = 'const config = {};';
const SEARCH_OLD = "module.exports = {\n  transformer: {";
const REPLACEMENT_COMMON = `const {resolve} = require('path');
const {createSerializer} = require('react-native-bundle-discovery');

const mySerializer = createSerializer({
  includeCode: true,
  projectRoot: __dirname,
  outputJsonPath: resolve(
    __dirname,
    ['ios', 'android'].includes(process.env.PLATFORM_TYPE)
      ? \`\${process.env.PLATFORM_TYPE}-metro-stats.json\`
      : \`metro-stats.json\`,
  ),
});`;

const REPLACEMENT =`${REPLACEMENT_COMMON}
const config = {
  serializer: {
    customSerializer: mySerializer,
  },
};`;
const REPLACEMENT_OLD =`${REPLACEMENT_COMMON}
module.exports = {
  serializer: {
    customSerializer: mySerializer
  },
  transformer: {`;

const REPACK_IMPORT = "import * as Repack from '@callstack/repack';";
const REPACK_RESOLVE = '...Repack.getResolveOptions(),';
// Metro resolves package.json "exports" by default since RN 0.79 (e.g. @react-native/asset-utils in 0.87 has no "main")
const REPACK_RESOLVE_EXPORTS = '...Repack.getResolveOptions({ enablePackageExports: true }),';
const REPACK_PLUGINS = 'plugins: [new Repack.RepackPlugin()]';
const REPACK_PLUGINS_REPLACEMENT = `plugins: [
    new Repack.RepackPlugin(),
    new BundleDiscoveryPlugin({
      filename: ['ios', 'android'].includes(process.env.PLATFORM_TYPE)
        ? \`\${process.env.PLATFORM_TYPE}-metro-stats.json\`
        : 'metro-stats.json',
      options: { source: true },
    }),
  ]`;

const run = (cmd, cwd) => {
  console.log(`\n$ ${cmd}  (in ${cwd})`);
  execSync(cmd, { cwd, stdio: 'inherit' });
};

// Wires the serializer into metro.config.js
const setupMetro = (projectDir) => {
  const metroConfigPath = join(projectDir, 'metro.config.js');
  const metroConfig = readFileSync(metroConfigPath, 'utf8');
  if (metroConfig.includes(SEARCH)) {
    writeFileSync(metroConfigPath, metroConfig.replace(SEARCH, REPLACEMENT));
    console.log(`Updated ${metroConfigPath}`);
  } else if (metroConfig.includes(SEARCH_OLD)) {
    writeFileSync(metroConfigPath, metroConfig.replace(SEARCH_OLD, REPLACEMENT_OLD));
    console.log(`Updated ${metroConfigPath}`);
  } else {
    console.warn(`⚠️  "${SEARCH}" not found in ${metroConfigPath}, update it manually`);
  }
};

// Installs Re.Pack and registers BundleDiscoveryPlugin in rspack.config.mjs (or webpack.config.mjs)
// https://github.com/retyui/react-native-bundle-discovery/blob/main/Re.Pack.md
const setupRepack = (projectDir, version) => {
  run('npx --yes @callstack/repack-init@latest --bundler rspack', projectDir);
  // repack-init only adds devDependencies to package.json
  // CI enables immutable installs by default, but the lockfile has to change here
  run('YARN_ENABLE_IMMUTABLE_INSTALLS=false yarn install', projectDir);

  const configPath = ['rspack.config.mjs', 'webpack.config.mjs']
    .map((file) => join(projectDir, file))
    .find((file) => existsSync(file));
  if (!configPath) {
    console.warn(`⚠️  rspack.config.mjs/webpack.config.mjs not found in ${projectDir}, update it manually`);
    return;
  }

  const config = readFileSync(configPath, 'utf8');
  if (config.includes(REPACK_IMPORT) && config.includes(REPACK_RESOLVE) && config.includes(REPACK_PLUGINS)) {
    const packageExports = Number(version.split('.')[1]) >= 79;
    writeFileSync(
      configPath,
      config
        .replace(REPACK_RESOLVE, packageExports ? REPACK_RESOLVE_EXPORTS : REPACK_RESOLVE)
        .replace(
          REPACK_IMPORT,
          `${REPACK_IMPORT}\nimport { BundleDiscoveryPlugin } from 'react-native-bundle-discovery';`,
        )
        .replace(REPACK_PLUGINS, REPACK_PLUGINS_REPLACEMENT),
    );
    console.log(`Updated ${configPath}`);
  } else {
    console.warn(`⚠️  "${REPACK_PLUGINS}" not found in ${configPath}, update it manually`);
  }
};

for (const { id, version } of versions) {
  console.log(`\n=============================== ${id} (${version}, ${args.bundler}) ===============================`);
  const projectDir = join(projectsDir, id);

  run(`rm -rf ${projectDir}`, projectsDir);

  // 1. Create the project (no CocoaPods install)
  try {
    run(
      `npx --yes @react-native-community/cli@latest init --pm yarn --version ${version} --install-pods false --skip-install ${id}`,
      projectsDir,
    );
  } catch (error) {
    console.error(`❌ init failed for ${id} (${version}), skipping: ${error.message}`);
    continue;
  }

  // 2. Add bundle-discovery packages
  // Empty yarn.lock makes the project its own Yarn root (not part of the parent repo)
  run('touch yarn.lock', projectDir);
  run(
    'yarn add react-native-bundle-discovery react-native-bundle-discovery-ui react-native-bundle-discovery-cli',
    projectDir,
  );

  // 3. Wire react-native-bundle-discovery into the bundler config
  if (args.bundler === 'repack') {
    setupRepack(projectDir, version);
  } else {
    setupMetro(projectDir);
  }
}
