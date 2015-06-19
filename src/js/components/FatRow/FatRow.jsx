import React from 'react/addons';

class FatRow extends React.Component {
  render() {
    return (
      <li>{this.props.title}</li>
    );
  }
}

FatRow.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default FatRow;
