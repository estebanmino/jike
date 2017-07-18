import React, { Component } from 'react';
import '../App.css';
import Locator from '../components/Locator';
import Photo from '../components/Photo';
import MapView from '../views/Map';
import PlacesActions from '../data/PlacesActions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  nextId = 1

  addLocation(result, lat, lng, text) {
    console.log(result, lat, lng, text);
    PlacesActions.addPlace({id: this.nextId, lat: lat, lng: lng, name:  text});

  }

  fetchPlaces() {
    const url = "http://localhost:3001/v1/places";
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(url, options)
      .then(data => data.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log('erro');
      });
  }

  render() {
    return (
      <div className="App">
        <Locator addLocation={(result, lat, lng, text) =>  this.addLocation(result, lat, lng, text) }/>
        <MapView locations={this.state.locations}/>

        <div className="locations">
          {this.state.locations.map(location => {
            return (
              <Photo
                name={location.name}
                lat={location.lat}
                lng={location.lng}
                key={location.id}
              />
            );
          })}
        </div>
      </div>

    );
  }
}

export default Home;
