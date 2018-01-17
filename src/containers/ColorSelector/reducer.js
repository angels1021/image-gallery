/**
 * reducer for the ColorPalette container
 * @module containers/ColorPalette/reducer
 * */
import { SET_COLOR, TOGGLE_PICKER } from './constants';

const initialState = {
  value: '',
  showPicker: false
};

const colorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COLOR: {
      const newValue = action.payload;
      if (newValue === state.value) return state;
      return {
        ...state,
        value: newValue
      };
    }
    case TOGGLE_PICKER: {
      return {
        ...state,
        showPicker: !state.showPicker
      };
    }
    default: {
      return state;
    }
  }
};

export default colorReducer;