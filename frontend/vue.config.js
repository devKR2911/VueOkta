const path = require('path');

// Reference: https://cli.vuejs.org/guide/webpack.html#simple-configuration
module.exports = {
  chainWebpack: chainableConfig => {
    // modify config with webpack-chain
    // https://github.com/mozilla-neutrino/webpack-chain
    chainableConfig.resolve.alias
      .set('@business', path.resolve(__dirname, './src/components/business'))
      .set('@filters', path.resolve(__dirname, './src/filters'))
      .set('@mocks', path.resolve(__dirname, './src/mocks'))
      .set('@assets', path.resolve(__dirname, './src/assets'))
      .set('@communication', path.resolve(__dirname, './src/communication'))
      .set('@directives', path.resolve(__dirname, './src/directives'));
  },

  configureWebpack: config => {
    // mutate config directly, or return new config
  },

  // object literal will be merged into base config using webpack-merge
  configureWebpack: {
    // ...
  }
}