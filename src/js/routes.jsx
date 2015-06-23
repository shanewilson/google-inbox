/* @flow */

import React from "react/addons";
import Router from "react-router";
var { DefaultRoute, Route, NotFoundRoute } = Router;

import App from "./app.jsx";
import Home from "./views/pages/home.jsx";

export default (
    <Route path="/" handler={App}>
      <DefaultRoute name="home" handler={Home}/>
    </Route>
);
