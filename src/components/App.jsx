import React, { Component } from 'react';
import Header from '../views/Header';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}

      </div>
    );
  }
}

export default App;
