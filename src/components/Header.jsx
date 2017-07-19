import React, { Component } from 'react';
import NavLink from './NavLink'

class Header extends Component {

  render() {
    return (
      <div>
        <ul className="nav">
          <li><NavLink to="/">App</NavLink></li>
          <li><NavLink to="/map">Map</NavLink></li>
          <li><NavLink to="/trips">Trips</NavLink></li>
          <li><NavLink to="/places">Places</NavLink></li>
          <li><NavLink to="/photos">Photos</NavLink></li>
        </ul>

      </div>

    );
  }
}

export default Header;
