/* eslint-disable */

"use strict";

module.exports = function (config) {
  var karmaBaseConfig = require("./karma.base.conf")(config);
  karmaBaseConfig.autoWatch = true;
  karmaBaseConfig.singleRun = false;
  karmaBaseConfig.reporters = ["mocha"];
  karmaBaseConfig.mochaReporter = { output: "autowatch" };
  config.set(karmaBaseConfig);

  return config;
};
