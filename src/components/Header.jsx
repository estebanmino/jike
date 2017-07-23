import React, { Component } from 'react';
import NavLink from './NavLink'

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="nav-container">
          <ul className="nav navbar-nav">
            <li><NavLink to="/">App</NavLink></li>
            <li><NavLink to="/map">Map</NavLink></li>
            <li><NavLink to="/trips">Trips</NavLink></li>
            <li><NavLink to="/places">Places</NavLink></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><NavLink to="/signin">SignIn</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
