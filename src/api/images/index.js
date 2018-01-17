/* @flow */
/**
 * gallery api
 * @module api/images
 * */
import images from '../../db/gallery-data.json';

export const getImages = () => new Promise((resolve) => {
  setTimeout(() => resolve(images), 500);
});
