/**
 * Constants for the images api
 * @module api/images/constants
 * @typicalname constants
 */

/** @static */
export const IMAGES_GET_ALL = {
  request: 'api/images/GET_IMAGES_REQUEST',
  success: 'api/images/GET_IMAGES_SUCCESS',
  error: 'api/images/GET_IMAGES_ERROR',
};

/** @static */
export const IMAGE_RESOLUTION = {
  thumbnail: 'thumbnail',
  low: 'low_resolution',
  standard: 'standard_resolution'
};

/** @static */
export const IMAGE_SIZES = {
  thumbnail: 150,
  low: 320,
  standard: 480
};

/** @static */
export const SIZE_RESOLUTION = {
  thumbnail: 'small',
  low: 'medium',
  standard: 'large'
};
