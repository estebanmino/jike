import React, { Component } from 'react';
import Header from './Header';
import {browserHistory} from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      places_count: 0,
      actual_place: [],
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

  fetchPlace(id) {
    console.log('fetchPLace', id);
    const url = "http://localhost:3001/v1/places/"+id;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(url, options)
      .then(data => data.json())
      .then(data => {
        this.setState({
          actual_place: data,
          error: null,
        });
      })
      .catch(err => {
        console.log('error in fetchPlace',err);
      });
  }


  addPlace(result, lat, lng, description) {
    this.state.places.push({
      name: result,
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
        description: description,
        lat: lat,
        lng: lng,
      })
    })
    this.setState(this.state);
  }

  deletePlace(id, index) {
    console.log('deletePlace', id);
    fetch('http://localhost:3001/v1/places/'+id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    this.state.places.splice(index, 1);
    this.setState(this.state);
    browserHistory.push('/places');
  }


  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {React.Children.map(
            this.props.children,
            child => React.cloneElement(child,
              {
                fetchPlaces: this.fetchPlaces.bind(this),
                fetchPlace:  this.fetchPlace.bind(this),
                addPlace: this.addPlace.bind(this),
                deletePlace: this.deletePlace.bind(this),
                places: this.state.places,
                actual_place: this.state.actual_place,
              })
          ) }
        </div>
      </div>
    );
  }
}

export default App;
