import React, { Component } from 'react';

class PlaceFront extends Component {

  handleOnClick() {
    console.log('handleOnClick', this.props.place.id);
  }

  render() {
    return (
      <div className="col col-md-2" onClick={this.handleOnClick.bind(this)}>
        <h3>{this.props.place.name}</h3>
        <h4>{this.props.place.description}</h4>
      </div>
    );
  }
}

export default PlaceFront;
