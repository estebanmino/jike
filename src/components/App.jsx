import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      trips: [],
      trips_count: 0,
      places_count: 0,
      actual_place: [],
      actual_trip: [],
      actual_place_photos: [],
    }
  }


  fetchTrips() {
    console.log('fetchTrips');
    const url = "https://apijike.herokuapp.com/v1/trips";
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(url, options)
      .then(data => data.json())
      .then(data => {
        this.setState({
          trips: data,
          trips_count: data.lenght,
          error: null,
        });
      })
      .catch(err => {
        console.log('error in fetchTrips', err);
      });
  }

  fetchTrip(id) {
    console.log('fetchTrip', id);
    const url = "https://apijike.herokuapp.com/v1/trips/"+id;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(url, options)
      .then(data => data.json())
      .then(data => {
        this.setState({
          actual_trip: data,
          error: null,
        });
      })
      .catch(err => {
        console.log('error in fetchTrip',err);
      });
  }

  fetchPlaces(id) {
    console.log('fetchPlacesId', id);
    console.log('fetchPlaces');
    var url = '';
    if (id) {
      url = "https://apijike.herokuapp.com/v1/trips/"+id+"/places";
    }
    else {
      url = "https://apijike.herokuapp.com/v1/places";
    }
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
        console.log('error in fetchPlaces', err);
      });
  }

  fetchPlace(id, trip_id) {
    console.log('fetchPLace', id, trip_id);
    const url = "https://apijike.herokuapp.com/v1/trips/"+trip_id+"/places/"+id;
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

  fetchPlacePhotos(id, trip_id) {
    console.log('fetchPlacePhotos', id, trip_id);
    const url = "https://apijike.herokuapp.com/v1/trips/"+trip_id+"/places/"+id+"/photos";
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(url, options)
      .then(data => data.json())
      .then(data => {
        this.setState({
          actual_place_photos: data,
          error: null,
        });
      })
      .catch(err => {
        console.log('error in fetchPlace',err);
      });
  }

  addTrip(name, description) {
    console.log('addTrip');
    this.state.trips.push({
      name: name,
      description:description,
      id: this.state.trips_count,
    })
    fetch('https://apijike.herokuapp.com/v1/trips', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        description: description,
      })
    })
    this.setState(this.state);

  }

  addPlace(result, lat, lng, description, trip_id) {
    this.state.places.push({
      name: result,
      lat: lat,
      lng:lng,
      id: this.state.places_count,
    })
    fetch('https://apijike.herokuapp.com/v1/trips/'+trip_id+'/places', {
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
        trip_id: trip_id,
      })
    })
    this.setState(this.state);
  }

  deletePlace(id, index, trip_id) {
    console.log('deletePlace', id);
    fetch('https://apijike.herokuapp.com/v1/trips/'+trip_id+'/places/'+id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    this.state.places.splice(index, 1);
    this.setState(this.state);
    this.props.history.goBack();
  }

  deleteTrip(id, index) {
    console.log('deleteTrip', id);
    fetch('https://apijike.herokuapp.com/v1/trips/'+id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    this.state.trips.splice(index, 1);
    this.setState(this.state);
    this.props.history.goBack();
  }

  addImage(trip_id, place_id, image_base64, name, description) {
    console.log('addImage');
    fetch('https://apijike.herokuapp.com/v1/trips/'+ trip_id +'/places/'+ place_id +'/photos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        photo: {
          name: name,
          description: description,
          place_id: place_id,
          image: image_base64,
        }
      })
    })
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
                fetchTrips: this.fetchTrips.bind(this),
                fetchTrip:  this.fetchTrip.bind(this),
                fetchPlaces: this.fetchPlaces.bind(this),
                fetchPlace:  this.fetchPlace.bind(this),
                fetchPlacePhotos: this.fetchPlacePhotos.bind(this),
                addPlace: this.addPlace.bind(this),
                addTrip: this.addTrip.bind(this),
                deletePlace: this.deletePlace.bind(this),
                deleteTrip: this.deleteTrip.bind(this),
                places: this.state.places,
                trips: this.state.trips,
                actual_place_photos: this.state.actual_place_photos,
                actual_place: this.state.actual_place,
                actual_trip: this.state.actual_trip,
                addImage: this.addImage.bind(this),
              })
          ) }
        </div>
      </div>
    );
  }
}

export default App;
