// Returns the versions to process: a single { id, version } when --name and --version
// are passed, otherwise every entry from rn-versions.json.

import rnVersions from './rn-versions.json' with { type: 'json' };

export const getVersions = ({ name, version }) => {
  if (!name && !version) {
    return rnVersions.versions;
  }
  if (!name || !version) {
    throw new Error('--name and --version must be passed together');
  }
  return [{ id: name, version }];
};
