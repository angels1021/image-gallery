/**
 * the base reducers
 * @module store/reducers
 * */

import { combineReducers } from 'redux';
import localForage from 'localforage';
import { persistReducer } from 'redux-persist';
import stateReconciler from 'redux-persist/lib/stateReconciler/hardSet';
import imagesReducer from '../api/images/reducer';
import colorReducer from '../containers/ColorSelector/reducer';
import resolutionReducer from '../containers/SizeSelector/reducer';

const persist = (reducer, key) => persistReducer({
  key, // the key for the persist
  storage: localForage, // the storage adapter, following the AsyncStorage api
  version: 1, // the state version as an integer (defaults to -1),
  stateReconciler
}, reducer);

export default combineReducers({
  images: persist(imagesReducer, 'images'),
  color: colorReducer,
  resolution: resolutionReducer
});
