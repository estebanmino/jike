import React, {Component} from 'react';

class Place extends Component {

  componentWillMount() {
    this.props.fetchPlace(this.props.params.placeId);
  }


  render() {
    return (
      <div className="place">
        <h1>Place</h1>
          {this.props.actual_place.map((place, index) => (
            <div key={place.id}>
              <h3>{place.name}</h3>
              <h4>{place.description}</h4>
            </div>
          ))}
      </div>
    )
  }
}

export default Place;
