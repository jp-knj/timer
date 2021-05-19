const baseConfig = require("./base.config.js");
const { merge } = require("webpack-merge");

const config = merge(baseConfig, {
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8000,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug'
      }
    },
  }
});

module.exports = config;
