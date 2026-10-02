// Creates one React Native project per version from rn-versions.json
// and sets up react-native-bundle-discovery in its metro.config.js.
//
// Usage: node scripts/create-projects.mjs [--name RN70 --version 0.70.15]

import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { getVersions } from './get-versions.mjs';

const { values: args } = parseArgs({
  options: { name: { type: 'string' }, version: { type: 'string' } },
});
const versions = getVersions(args);

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const projectsDir = join(root, 'tmp');
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

const run = (cmd, cwd) => {
  console.log(`\n$ ${cmd}  (in ${cwd})`);
  execSync(cmd, { cwd, stdio: 'inherit' });
};

for (const { id, version } of versions) {
  console.log(`\n=============================== ${id} (${version}) ===============================`);
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

  // 3. Wire the serializer into metro.config.js
  const metroConfigPath = join(projectDir, 'metro.config.js');
  const metroConfig = readFileSync(metroConfigPath, 'utf8');
  if (metroConfig.includes(SEARCH)) {
    writeFileSync(metroConfigPath, metroConfig.replace(SEARCH, REPLACEMENT));
    console.log(`Updated ${metroConfigPath}`);
  } else if(metroConfig.includes(SEARCH_OLD)) {
    writeFileSync(metroConfigPath, metroConfig.replace(SEARCH_OLD, REPLACEMENT_OLD));
    console.log(`Updated ${metroConfigPath}`);
  } else {
    console.warn(`⚠️  "${SEARCH}" not found in ${metroConfigPath}, update it manually`);
  }
}
