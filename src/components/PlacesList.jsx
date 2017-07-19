import React, { Component } from 'react';
import Place from './Place';

class PlacesList extends Component {

  componentWillMount() {
    this.props.fetchPlaces();
  }

  render() {
    return (
      <div>

      <h3>PlacesList</h3>
      {this.props.places.map((place, index) => (
        <Place place={place} key={index}/>
      ))}
      </div>
    );
  }
}

export default PlacesList;
