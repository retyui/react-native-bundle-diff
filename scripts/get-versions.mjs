// Returns the versions to process for a bundler: a single { id, version } when --name and
// --version are passed, otherwise every entry from rn-versions.json.
// Re.Pack supports React Native >= 0.77 (https://re-pack.dev/docs/getting-started/quick-start)
// and doesn't work with 0.88 yet.

import rnVersions from './rn-versions.json' with { type: 'json' };

export const BUNDLERS = ['metro', 'repack'];

const REPACK_MIN_MINOR = 77;
const REPACK_MAX_MINOR = 87;

const isSupported = (bundler, version) => {
  const minor = Number(version.split('.')[1]);
  return bundler !== 'repack' || (minor >= REPACK_MIN_MINOR && minor <= REPACK_MAX_MINOR);
};

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
    throw new Error(
      `${bundler} requires React Native 0.${REPACK_MIN_MINOR}.x - 0.${REPACK_MAX_MINOR}.x, got ${version}`,
    );
  }
  return [{ id: name, version }];
};
