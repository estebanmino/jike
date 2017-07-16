import React, { Component } from 'react';
import '../App.css';
import Locator from './Locator';
import Photo from './Photo';
import MapView from './Map';
import Header from './Header';
import data from './data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: data
    }
  }

  nextId = 1

  addLocation(result, lat, lng, text) {
    console.log(result, lat, lng, text);
    this.state.locations.push({
      name: text,
      lat: lat,
      lng:lng,
      id: this.nextId,
    })
    this.setState(this.state);
    this.nextId += 1;
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
