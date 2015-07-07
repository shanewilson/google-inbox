/* @flow */

import React from "react";
import Router from "react-router";
import routes from "./js/routes.jsx";
import Raven from "raven-js";
import config from "./config.js";

if (config.DEV) {
  console.log("extra dev stuff");
}

if (config.FEATURE_1) {
  console.log("secret feature!");
}

if (config.FEATURE_2) {
  console.log("not this secret feature!");
}

Raven.config(config.SENTRY_TOKEN, {
	// pass along the version of your application
	// release: '1.0.0',

    // we highly recommend restricting exceptions to a domain in order to filter out clutter
    whitelistUrls: ["http://localhost:8000"],
    fetchContext: true,
    linesOfContext: 6
}).install();

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler/>, document.getElementById("app"));
});
