/* @flow */

import React from "react/addons";

import ScrollList from "./ScrollList";

class ScrollListContainer extends React.Component {
  render(): React.Element {
    return <ScrollList items={this.props.items} />;
  }
}

ScrollListContainer.propTypes = ScrollList.propTypes;

export default ScrollListContainer;
