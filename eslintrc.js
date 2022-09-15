// load plugins/resources from the dependencies of this package instead of peerDependencies
// eslint-disable-next-line import/no-unassigned-import
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = require('./configurations/eslintrc.json');
