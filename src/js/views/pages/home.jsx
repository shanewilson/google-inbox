/* @flow */

import React from "react/addons";
import FatRow from "../../components/FatRow";

class Home extends React.Component {
  render(): React.Element {
    var items = [{title: "Item One"}, {title: "Item Two"}];
    // var elems = items.map((item) => {
    //   return <FatRow key={item.title} title={item.title} />;
    // });

    return (
      <div>
        <h1>12Title</h1>
      </div>
    );
  }
}

export default Home;
