/* eslint-disable */

"use strict";

module.exports = function (config) {
  var karmaBaseConfig = require("./karma.base.conf")(config);
  karmaBaseConfig.autoWatch = false;
  karmaBaseConfig.singleRun = true;
  karmaBaseConfig.reporters = ["progress"];
  config.set(karmaBaseConfig);

  return config;
};
