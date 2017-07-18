import HomeContainer from './containers/HomeContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import './index.css';
import App from './components/App';
import PhotosList from './components/PhotosList';
import PlacesList from './components/PlacesList';
import TripsList from './components/TripsList';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <Route path="/home" component={HomeContainer} ></Route>
      <Route path="/trips" component={TripsList}></Route>
      <Route path="/places" component={PlacesList}></Route>
      <Route path="/photos" component={PhotosList}></Route>
    </Route>
  </Router>
  , document.getElementById('root'));

registerServiceWorker();
