import React, {Component} from 'react';
import Locator from '../Locator'
import TripPlacesList from './TripPlacesList'

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    }
  }

  componentWillMount() {
    this.props.fetchTrip(this.props.params.tripId);
  }

  handleDeleteTrip(id, index) {
  this.props.deleteTrip(id, index);
  console.log('handleDeleteTrip');

  }

  handleAddPlace(result, lat, lng, description) {
    this.state.places.push({
      name: result,
      lat: lat,
      lng:lng,
      id: this.state.places.lenght,
    });
    this.setState(this.state);
    this.props.addPlace(result, lat, lng, description, this.props.params.tripId);
  }

  render() {
    return (
      <div className='trip-view'>
        <div className="trip">
          <h1>Trip</h1>
            {this.props.actual_trip.map((trip) => (
              <div key={trip.id}>
                <h3>{trip.name}</h3>
                <h4>{trip.description}</h4>
                <button className="btn btn-danger" onClick={this.handleDeleteTrip.bind(this, trip.id, this.props.index)}>Delete</button>
              </div>
            ))}
        </div>
        <div className="locator">
          <Locator addPlace={(result, lat, lng, description) =>  this.handleAddPlace(result, lat, lng, description) }/>
        </div>
        <div>
          <TripPlacesList fetchPlaces={this.props.fetchPlaces} tripId={this.props.params.tripId} places={this.props.places}/>
        </div>
      </div>
    )
  }
}

export default Trip;
