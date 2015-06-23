/* @flow */

import React from "react";
import Router from "react-router";
import routes from "./js/routes.jsx";
console.log(React);
Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler/>, document.getElementById("app"));
});
