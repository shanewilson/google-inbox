/* eslint-disable */

"use strict";

var path = require("path");
var webpackConfig = require("./webpack.dev.config");
webpackConfig.devServer.noInfo = false;

module.exports = function (config) {
  config.set({
    browsers: [ "PhantomJS" ],
    // karma only needs to know about the test bundle
    files: [
      "./node_modules/phantomjs-polyfill/bind-polyfill.js",
      "tests.webpack.js"
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      "tests.webpack.js": [ "webpack", "sourcemap" ]
    },
    frameworks: [ "chai-sinon", "mocha" ],
    plugins: [
      "karma-phantomjs-launcher",
      "karma-chai-sinon",
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-sourcemap-loader",
      "karma-webpack"
    ],
    colors: true,

    // level of logging
    // possible values:
    // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    webpack: webpackConfig,
    webpackMiddleware: webpackConfig.devServer
  });

  return config;
};
