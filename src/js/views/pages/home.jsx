/* @flow */

import React from "react/addons";
import FatRow from "../../components/FatRow";

class Home extends React.Component {
  render(): React.Element {
    var items = [{title: "Item One1"}, {title: "Item Two"}];
    return (
      <div>
      { items.map(item => <FatRow key={item.title} title={item.title} />) }
      </div>
    );
  }
}

export default Home;
