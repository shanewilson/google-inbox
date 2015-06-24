/* eslint-disable */

"use strict";

// Browser ES6 Polyfill
require('babel/polyfill');

var context = require.context("./src", true, /.+\.test\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
