import { imagesTypes } from './images.types';

const IMITIAL_STATE = {
  images: [],
};

const imagesReducer = (state = IMITIAL_STATE, action) => {
  switch (action.type) {
    case imagesTypes.REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image.id !== action.payload),
      };
    default:
      return state;
  }
};

export default imagesReducer;
