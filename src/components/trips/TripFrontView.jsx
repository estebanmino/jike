import React, { Component } from 'react';
import NavLink from '../NavLink';

class TripFront extends Component {


  render() {
    return (
      <NavLink to={'/trips/' +  this.props.trip.id} >
        <div className="col col-md-2" >
          <h3>{this.props.trip.name}</h3>
          <h4>{this.props.trip.description}</h4>
        </div>
      </NavLink>
    );
  }
}

export default TripFront;
