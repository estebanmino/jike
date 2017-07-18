import PlacesActionTypes from './PlacesActionTypes';
import PLacesDispatcher from './PlacesDispatcher';

const Actions = {
  addPlace(id, lat, lng, name) {
    PLacesDispatcher.dispatch({
      type: PlacesActionTypes.ADD_PLACE,
      id,
      lng,
      lat,
      name,
    });
  },
};

export default Actions;
