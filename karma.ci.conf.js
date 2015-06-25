/* eslint-disable */

"use strict";

var path = require("path");
var fs = require("graceful-fs");

module.exports = function(config) {
  var karmaBaseConfig = require("./karma.base.conf")(config);

  // Use ENV vars on Travis and sauce.json locally to get credentials
  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    if (!fs.existsSync('sauce.json')) {
      console.log('Need SauceLabs credentials');
      process.exit(1);
    } else {
      process.env.SAUCE_USERNAME = require('./sauce').username;
      process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
    }
  }


  // Browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/OS combos
  var customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome'
    },
    'SL_Firefox': {
      base: 'SauceLabs',
      browserName: 'firefox'
    }
  };
  karmaBaseConfig.reporters = ['progress', 'coverage', 'saucelabs'];
  karmaBaseConfig.plugins.push("karma-sauce-launcher", "karma-coverage");
  karmaBaseConfig.sauceLabs = {
    testName: 'Karma and Sauce Labs demo',
    recordScreenshots: false,
    connectOptions: {
      port: 5757,
      logfile: 'sauce_connect.log'
    }
  };
  karmaBaseConfig.coverageReporter = {
    dir: 'coverage',
    reporters: [
      { type: 'lcovonly', subdir: '.', file: 'lcov.info' }
    ]
  };
  // Increase timeout in case connection in CI is slow
  karmaBaseConfig.captureTimeout = 120000;
  karmaBaseConfig.customLaunchers = customLaunchers;
  karmaBaseConfig.browsers = Object.keys(customLaunchers);
  karmaBaseConfig.singleRun = true;

  karmaBaseConfig.webpack.module.preLoaders = [
       // transpile and instrument testing files with isparta
       {
           test: /\.jsx?$/,
           include: path.join(__dirname, "src"),
           exclude: /test.js$/,
           loader: "isparta-instrumenter"
       }
  ].concat(karmaBaseConfig.webpack.module.preLoaders);

  config.set(karmaBaseConfig);

  return config;
};
