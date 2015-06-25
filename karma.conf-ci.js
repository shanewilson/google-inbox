/* eslint-disable */

"use strict";

var fs = require("graceful-fs");

module.exports = function(config) {
  var karmaConfig = require("./karma.conf")(config);

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
  karmaConfig.reporters = ['progress', 'coverage', 'saucelabs'];
  karmaConfig.plugins.push("karma-sauce-launcher", "karma-coverage");
  karmaConfig.sauceLabs = {
    testName: 'Karma and Sauce Labs demo',
    recordScreenshots: false,
    connectOptions: {
      port: 5757,
      logfile: 'sauce_connect.log'
    }
  };
  karmaConfig.coverageReporter = {
    dir: 'coverage',
    reporters: [
      { type: 'lcovonly', subdir: '.', file: 'lcov.info' }
    ]
  }
  karmaConfig.logLevel = config.LOG_INFO;
  // Increase timeout in case connection in CI is slow
  karmaConfig.captureTimeout = 120000;
  karmaConfig.customLaunchers = customLaunchers;
  karmaConfig.browsers = Object.keys(customLaunchers);
  karmaConfig.singleRun = true;

  config.set(karmaConfig);

  return config;
};
