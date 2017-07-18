import MapView from '../views/Map';
import {Container} from 'flux/utils';
import PlacesStore from '../data/PlacesStore';

function getStores() {
  return [
    PlacesStore,
  ];
}

function getState() {
  return {
    places: PlacesStore.getState(),
  };
}

export default Container.createFunctional(MapView, getStores, getState);
