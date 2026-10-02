// Returns the versions to process for a bundler: a single { id, version } when --name and
// --version are passed, otherwise every entry from rn-versions.json.
// Re.Pack only supports React Native >= 0.77 (https://re-pack.dev/docs/getting-started/quick-start).

import rnVersions from './rn-versions.json' with { type: 'json' };

export const BUNDLERS = ['metro', 'repack'];

const REPACK_MIN_MINOR = 77;

const isSupported = (bundler, version) =>
  bundler !== 'repack' || Number(version.split('.')[1]) >= REPACK_MIN_MINOR;

export const getVersions = ({ name, version, bundler = 'metro' }) => {
  if (!BUNDLERS.includes(bundler)) {
    throw new Error(`--bundler must be one of: ${BUNDLERS.join(', ')}`);
  }
  if (!name && !version) {
    return rnVersions.versions.filter((entry) => isSupported(bundler, entry.version));
  }
  if (!name || !version) {
    throw new Error('--name and --version must be passed together');
  }
  if (!isSupported(bundler, version)) {
    throw new Error(`${bundler} requires React Native >= 0.${REPACK_MIN_MINOR}, got ${version}`);
  }
  return [{ id: name, version }];
};
