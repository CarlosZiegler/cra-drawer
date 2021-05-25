const { alias, aliasJest } = require('react-app-rewire-alias');

const aliasMap = {
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@theme': 'src/theme',
  '@service': 'src/service',
  '@pages': 'src/pages',
  '@hooks': 'src/hooks',
  '@infra': 'src/infra',
  '@utils': 'src/utils',
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
