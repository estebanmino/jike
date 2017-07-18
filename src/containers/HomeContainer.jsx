import Home from '../views/Home';
import {Component} from 'react';
import {Container} from 'flux/utils';
import PlacesStore from '../data/PlacesStore';

class HomeContainer  extends Component {

  static getStores() {
    return [
      PlacesStore,
    ]
  }

  static calculateState(prevState) {
    return {
      places: PlacesStore.getState(),
    };
  }
}

export default Container.create(HomeContainer);
