import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      places_count: 0,
    }
  }

  fetchPlaces() {
    console.log('fetchPlaces');
    const url = "http://localhost:3001/v1/places";
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(url, options)
      .then(data => data.json())
      .then(data => {
        this.setState({
          places: data,
          places_count: data.lenght,
          error: null,
        });
      })
      .catch(err => {
        console.log('erro');
      });
  }

  addPlace(result, lat, lng, text) {
    this.state.places.push({
      name: text,
      lat: lat,
      lng:lng,
      id: this.state.places_count,
    })
    fetch('http://localhost:3001/v1/places', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: result,
        description: text,
        lat: lat,
        lng: lng,
      })
    })
    this.setState(this.state);
  }

  render() {
    return (
      <div className="container">
        <Header />
        {React.cloneElement(this.props.children,
          {
            fetchPlaces: this.fetchPlaces.bind(this),
            addPlace: this.addPlace.bind(this),
            places: this.state.places,
          })
        }
      </div>
    );
  }
}

export default App;
