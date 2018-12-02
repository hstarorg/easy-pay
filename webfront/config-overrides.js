const ccra = require('customize-cra');
module.exports = ccra.override(
  // ccra.useEslintRc(),
  ccra.useBabelRc(),
  ccra.addDecoratorsLegacy(),
  // ccra.fixBabelImports('antd', { libraryDirectory: 'es', style: 'css' }),
  ccra.fixBabelImports('antd', { libraryDirectory: 'es', style: true }), // If need customize style
  ccra.addLessLoader({
    modifyVars: {},
    javascriptEnabled: true
  })
);
