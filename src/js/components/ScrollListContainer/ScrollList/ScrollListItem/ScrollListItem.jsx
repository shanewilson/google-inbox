/* @flow */

import React from "react";
var {Component, PropTypes} = React;

class ScrollListItem extends Component {
  render(): React.Element {
    var item = this.props.item;
    return (
      <li>
        {item.transactionId} - {item.type} - {item.submissionId} - {item.message} - {item.date}
      </li>
    );
  }
}

ScrollListItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    submissionId: PropTypes.number.isRequired,
    transactionId: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

export default ScrollListItem;
