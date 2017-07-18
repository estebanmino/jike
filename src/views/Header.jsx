import React, { Component } from 'react';
import { Link } from 'react-router'
import NavLink from '../components/NavLink'

class Header extends Component {

  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/home">Map</NavLink></li>
          <li><NavLink to="/trips">Trips</NavLink></li>
          <li><NavLink to="/places">Places</NavLink></li>
          <li><NavLink to="/photos">Photos</NavLink></li>
        </ul>
      </div>

    );
  }
}

export default Header;
