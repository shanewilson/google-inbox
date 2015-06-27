/* @flow */

import React from "react/addons";

class DateGroup extends React.Component {
  render(): React.Element {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

DateGroup.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
};

export default DateGroup;
