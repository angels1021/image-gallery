/**
 * reducer for the SizeSelector
 * @module containers/SizeSelector/reducer
 * */
import { SET_SIZE } from './constants';

const resolutionReducer = (state = 'thumbnail', action = {}) => {
  switch (action.type) {
    case SET_SIZE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default resolutionReducer;
