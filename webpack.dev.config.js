"use strict";

var path = require("path");
var webpack = require("webpack");

var config = require("./webpack.base.config.js");

config.devtool = "eval";

config.devServer = {
  contentBase: "src",
  https: false,
  stats: {
    colors: true,
    chunks: false,
    chunkModules: false
  },
  historyApiFallback: true
};

config.module.loaders = config.module.loaders.concat([
  {test: /\.jsx?$/, loaders: ["react-hot", "babel"], include: path.join(__dirname, "src")}
]);

config.plugins = [
  new webpack.NoErrorsPlugin()
];

module.exports = config;
