/**
 * galley reducer
 * @module api/images/reducer
 * */
import { IMAGES_GET_ALL } from './constants';

const dedfaultState = {
  loading: false,
  error: null,
  items: [],
  colors: []
};

const imagesReducer = (state = dedfaultState, action) => {
  switch (action.type) {
    case IMAGES_GET_ALL.request: {
      return {
        ...state,
        error: null,
        loading: true
      };
    }
    case IMAGES_GET_ALL.error: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case IMAGES_GET_ALL.success: {
      const { items, colors } = action.payload;
      return {
        ...dedfaultState,
        items,
        colors,
      };
    }
    default: {
      return state;
    }
  }
};

export default imagesReducer;
