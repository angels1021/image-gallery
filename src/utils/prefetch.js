import times from 'lodash/times';
import take from 'lodash/take';
import zip from 'lodash/zip';
import forEach from 'lodash/forEach';
import { IMAGE_RESOLUTION } from '../api/images/constants';

const createNodes = () => Object.keys(IMAGE_RESOLUTION)
  .reduce((collected, key) => ({
    ...collected,
    [IMAGE_RESOLUTION[key]]: new Image()
  }), {});

export const prefetch = (images, limit = 1) => {
  const imageNodes = times(limit, createNodes);
  const imageList = take(images, limit);
  const imageMap = zip(imageNodes, imageList);
  return imageMap.map(([nodes, image]) => {
    forEach(nodes, (node, key) => {
      node.src = image[key].url; // eslint-disable-line no-param-reassign
    });
    return nodes;
  });
};

export const prefetchBySize = (size, images, limit = 1) => {
  const imageNodes = times(limit, () => new Image());
  const imageList = take(images, limit);
  const imageMap = zip(imageNodes, imageList);
  return imageMap.map(([node, image]) => {
    try {
      node.src = image[IMAGE_RESOLUTION[size]].url; // eslint-disable-line no-param-reassign
    } catch (ex){
      console.log('exception', image, node, size, IMAGE_RESOLUTION[size]);
    }

    return node;
  });
};
