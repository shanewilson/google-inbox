/* @flow */

import React from "react";

import ScrollList from "../../components/ScrollList";

class ScrollListContainer extends React.Component {
  render(): React.Element {
    return <ScrollList items={this.props.items} />;
  }
}

ScrollListContainer.propTypes = ScrollList.propTypes;

export default ScrollListContainer;
