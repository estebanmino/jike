import React, { Component } from 'react';
import NavLink from '../NavLink';

class PlaceFront extends Component {


  render() {
    return (
      <NavLink to={'/places/' +  this.props.place.id} >
        <div className="col col-md-2" >
          <h3>{this.props.place.name}</h3>
          <h4>{this.props.place.description}</h4>
        </div>
      </NavLink>
    );
  }
}

export default PlaceFront;
