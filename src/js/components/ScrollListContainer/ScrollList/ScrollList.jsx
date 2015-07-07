/* @flow */

import React from "react/addons";

import ScrollListItem from "./ScrollListItem";

class ScrollList extends React.Component {
  render(): React.Element {
    var items = this.props.items.map(item => {
      return <ScrollListItem key={item.transactionId} item={item} />;
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

ScrollList.propTypes = {
  items: React.PropTypes.arrayOf(ScrollListItem.propTypes.item).isRequired
};

export default ScrollList;
