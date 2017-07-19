import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import './index.css';
import App from './components/App';
import MapView from './components/MapView';
import PhotosList from './components/PhotosList';
import PlacesList from './components/PlacesList';
import TripsList from './components/TripsList';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <Route path="/map" component={MapView}/>
      <Route path="/trips" component={TripsList}/>
      <Route path="/places" component={PlacesList}/>
      <Route path="/photos" component={PhotosList}/>
    </Route>
  </Router>
  , document.getElementById('root'));
