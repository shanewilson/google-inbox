import React from 'react/addons';
import FatRow from '../../components/FatRow';

class Home extends React.Component {
  render() {
    var items = [{title: 'Item One'}, {title: 'Item Two'}];
    return (
      <div>
      { items.map(item => <FatRow key={item.title} title={item.title} />) }
      </div>
    );
  }
}

export default Home;
