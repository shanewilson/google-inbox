/* @flow */

import React from "react/addons";

import DateGroup from "./DateGroup";

class DateGroupContainer extends React.Component {
  render(): React.Element {
    return (
      <DateGroup title={this.props.title}>
        {this.props.children}
      </DateGroup>
    );
  }
}

DateGroupContainer.propTypes = DateGroup.propTypes;

export default DateGroupContainer;
