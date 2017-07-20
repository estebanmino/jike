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
          {this.props.places.map((place) => (
            <PlaceFront place={place} key={place.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default PlacesList;
