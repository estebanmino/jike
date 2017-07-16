import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import './index.css';
import App from './components/App';
import Home from './components/Home';
import PhotosList from './components/PhotosList';
import PlacesList from './components/PlacesList';
import TripsList from './components/TripsList';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <Route path="/home" component={Home}/>
      <Route path="/trips" component={TripsList}/>
      <Route path="/places" component={PlacesList}/>
      <Route path="/photos" component={PhotosList}/>
    </Route>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
