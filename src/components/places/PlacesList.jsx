import React, { Component } from 'react';
import PlaceFront from './PlaceFrontView';

class PlacesList extends Component {

  componentWillMount() {
    this.props.fetchPlaces();
  }

  render() {
    return (
      <div>
        <h3>PlacesList</h3>
        <div className="place-list">
          {this.props.places.map((place, index) => (
            <PlaceFront place={place} key={place.id} index={index}/>
          ))}
        </div>
      </div>
    );
  }
}

export default PlacesList;
