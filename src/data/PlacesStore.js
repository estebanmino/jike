import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import PlacesActionTypes from './PlacesActionTypes';
import PlacesDispatcher from './PlacesDispatcher';

class PlacesStore extends ReduceStore {
  constructor() {
    super(PlacesDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case PlacesActionTypes.ADD_TODO:
        // Do nothing for now, we will add logic here soon!
        return state;

      default:
        return state;
    }
  }
}

export default new PlacesStore();
