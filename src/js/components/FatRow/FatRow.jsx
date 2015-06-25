/* @flow */

import React from "react/addons";

//function sum(numbers: Array<number>): string {
//  return 1;
//}

//sum([1, 2, "c"]);

class FatRow extends React.Component {

  someFunc(): number {
    var x = 1;
    return x;
  };

  someFunc2(): number {
    var x = 1;
    return x;
  };

  someFunc3() {};

  render(): React.Element {
    var x = this.someFunc();
    var y = this.someFunc2();
    return (
      <li>{this.props.title}</li>
    );
  }
}

FatRow.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default FatRow;
