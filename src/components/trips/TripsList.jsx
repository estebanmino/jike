import React, { Component } from 'react';
import TripFront from './TripFrontView';
import NavLink from '../NavLink';

class TripsList extends Component {

  componentWillMount() {
    this.props.fetchTrips();
  }

  render() {
    return (
      <div className="trip-list">
        <div className="add-trip-list">
          <h3>TripsList</h3>
          <NavLink to="/trips/add" className=""><span className="glyphicon glyphicon-plus-sign"></span></NavLink>
        </div>
        <div className="trip-list">
          {this.props.trips.map((trip, index) => (
            <TripFront trip={trip} key={trip.id} index={index}/>
          ))}
        </div>
      </div>
    );
  }
}

export default TripsList;
