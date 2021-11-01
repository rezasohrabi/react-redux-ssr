import { imagesTypes } from './images.types';

export const removeImage = (imageId) => ({
  type: imagesTypes.REMOVE_IMAGE,
  payload: imageId,
});
