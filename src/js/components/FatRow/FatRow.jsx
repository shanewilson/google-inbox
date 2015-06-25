/* @flow */

import React from "react/addons";

//function sum(numbers: Array<number>): string {
//  return 1;
//}

//sum([1, 2, "c"]);

class FatRow extends React.Component {
  render(): React.Element {
    return (
      <li>{this.props.title}</li>
    );
  }
}

FatRow.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default FatRow;
