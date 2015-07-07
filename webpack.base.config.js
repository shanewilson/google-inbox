/* eslint-disable */

"use strict";

var path = require("path");
var webpack = require("webpack");
var embedFileSize = 65536;

module.exports = {
  target: "web",
  devtool: "#source-map",
  entry: {
    bundle: "./src/entry.jsx"
  },
  output: {
    path: path.join(__dirname, "dist", "js"),
    pathInfo: true,
    publicPath: "/js/",
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint-loader", include: path.join(__dirname, "src")},
      // {test: /config\.js$/, loader: "envify-loader"}
    ],
    loaders: [
      {test: /\.json$/, loader: "json"},
      {test: /\.png$/, loader: "url?limit=" + embedFileSize + "&mimetype=image/png"},
      {test: /\.gif$/, loader: "url?limit=" + embedFileSize + "&mimetype=image/gif"},
      {test: /\.jpe?g$/, loader: "url?limit=" + embedFileSize + "&mimetype=image/jpeg"},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=" + embedFileSize + "&minetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file"}
    ],
    noParse: /\.min\.js/
  },
  resolve: {
    extentions: ["", "js", "jsx"],
    modulesDirectories: ["web_modules", "node_modules", "components", "containers", "views"]
    // alias: {
    //   react: path.resolve("./node_modules/react")
    // }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
      __SENTRY_TOKEN__: JSON.stringify(process.env.SENTRY_TOKEN),
      __DEV__: JSON.stringify(process.env.NODE_ENV === "production" ? false : true),
      __FEATURE_1__: JSON.stringify(process.env.FEATURE_1 || false),
      __FEATURE_2__: JSON.stringify(process.env.FEATURE_2 || false),

    })
  ]
};
