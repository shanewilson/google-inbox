var path = require("path");
var webpackConfig = require("./webpack.dev.config");

webpackConfig.module.preLoaders = [
     // transpile and instrument testing files with isparta
     {
         test: /\.jsx?$/,
         include: path.resolve("src/"),
         loader: "isparta-instrumenter"
     }
];
webpackConfig.devServer.noInfo = true;

module.exports = function (config) {
  config.set({
    browsers: [ "PhantomJS" ],
    // karma only needs to know about the test bundle
    files: [
      "./node_modules/phantomjs-polyfill/bind-polyfill.js",
      "src/tests.bundle.js"
    ],
    frameworks: [ "chai-sinon", "mocha" ],
    plugins: [
      "karma-phantomjs-launcher",
      "karma-chai-sinon",
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-sourcemap-loader",
      "karma-webpack",
      "karma-coverage"
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      "src/tests.bundle.js": [ "webpack", "sourcemap" ]
    },
    colors: true,
    autoWatch: true,
    singleRun: false,

    // level of logging
    // possible values:
    // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    reporters: ["mocha", "coverage"],
    coverageReporter: {
        type: "html",
        dir: "coverage/"
    },
    // reporter options
    mochaReporter: {
      output: "autowatch"
    },

    webpack: webpackConfig,
    webpackMiddleware: webpackConfig.devServer
  });
};
