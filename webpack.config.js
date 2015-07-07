/* eslint-disable */

"use strict";

var path = require("path");
var webpack = require("webpack");

var packageJSON = require("./package.json");
var dependencies = Object.keys(packageJSON.dependencies).map(function(d) { return d; });

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var production = process.env.NODE_ENV === "production";
var config = production ? require("./webpack.prod.config.js") : require("./webpack.base.config.js");
config.entry.libs = dependencies;
config.module.loaders = config.module.loaders.concat([
  {test: /\.jsx?$/, loader: "babel", include: path.join(__dirname, "src")}
]);

config.plugins = config.plugins.concat(
  [
    new webpack.optimize.CommonsChunkPlugin('libs', production ? 'libs.[hash].min.js' : 'libs.js'),
    function() {
      this.plugin("done", function(stats) {
        var fs = require("graceful-fs");

        fs.readFile(path.join(__dirname, "src", "index.html"), "utf8", function(readErr, data) {
          if (readErr) return console.log(readErr);

          data = data.replace('<!-- build:js:libs -->', '<script src="/js/libs.js"></script>');

          if (production) {
            data = config.revFiles(data, stats.toJson().assets);
          }

          fs.writeFile(path.join(__dirname, "dist", "index.html"), data, "utf8", function(writeErr) {
            if (writeErr) return console.log(writeErr);
          });
        });
      });
    }
  ]);

module.exports = config;
