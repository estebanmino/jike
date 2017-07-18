import PlacesActionTypes from './PlacesActionTypes';
import PLacesDispatcher from './PlacesDispatcher';

const Actions = {
  addTodo(text) {
    PLacesDispatcher.dispatch({
      type: PlacesActionTypes.ADD_PLACE,
      text,
    });
  },
};

export default Actions;
