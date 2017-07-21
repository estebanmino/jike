import React, { Component } from 'react';
import TripPlaceFront from './TripPlaceFrontView';

class TripPlacesList extends Component {

  componentWillMount() {
    this.props.fetchPlaces(this.props.tripId);
  }

  render() {
    return (
      <div>
        <h3>PlacesList</h3>
        <div className="place-list">
          {this.props.places.map((place, index) => (
            <TripPlaceFront place={place} key={place.id} index={index} tripId={this.props.tripId}/>
          ))}
        </div>
      </div>
    );
  }
}

export default TripPlacesList;
