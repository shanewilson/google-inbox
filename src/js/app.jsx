/* @flow */

import React from "react";
import { RouteHandler } from "react-router";

export default class App extends React.Component {
  render(): React.Element {
    return (
      <div className='MyApp'>
        <RouteHandler />
      </div>
    );
  }
}
