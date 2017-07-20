import React, {Component} from 'react';

class Place extends Component {
  render() {
    return (
      <div className="place">
        <h5>{this.props.place.name}</h5>
        <h5>{this.props.place.lat}</h5>
        <h5>{this.props.place.lng}</h5>
        <h5>{this.props.place.description}</h5>
      </div>
    )
  }
}

export default Place;
