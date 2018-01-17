/* @flow */
/**
 * the base reducers
 * @module store/reducers
 * */

import { combineReducers } from 'redux';
import imagesReducer from '../api/images/reducer';
import colorReducer from '../containers/ColorSelector/reducer';
import resolutionReducer from '../containers/SizeSelector/reducer';

export default combineReducers({
  images: imagesReducer,
  color: colorReducer,
  resolution: resolutionReducer
});
