/* @flow */

import React from "react";
import Router from "react-router";
var { DefaultRoute, Route, NotFoundRoute } = Router;

import App from "./app.jsx";
import Timeline from "./views/pages/timeline.jsx";

export default (
    <Route path="/" handler={App}>
      <DefaultRoute name="timeline" handler={Timeline}/>
    </Route>
);
