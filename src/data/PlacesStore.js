import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import PlacesActionTypes from './PlacesActionTypes';
import PlacesDispatcher from './PlacesDispatcher';
import Place from './Places';


class PlacesStore extends ReduceStore {
  constructor() {
    super(PlacesDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case PlacesActionTypes.ADD_PLACE:
      // Don't add todos with no text.
      if (!action.lat || !action.lng || !action.name) {
        return state;
      }
      const id = Math.random();
      return state.set(id, new Place({
        id: action.id,
        name: action.name,
        lat: action.lat,
        lng: action.lng,
      }));

      default:
        return state;
    }
  }
}

export default new PlacesStore();
