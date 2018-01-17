/**
 * Action creators for the images api.
 * @module api/images/actions
 * @typicalname actions
 * */

import { IMAGES_GET_ALL } from './constants';
import normalizeData from './normalize';
import * as api from './';

/**
 * An action object.
 * @typedef {{type:(string),payload:(object)}} action
 * */

/**
 * set the received images
 * @function getAllSuccess
 * @memberOf module:api/images/actions
 * @static
 *
 * @param images ([{}]) - the response data
 *
 * @returns {action} action object - { type: IMAGES_GET_ALL_SUCCESS }
 */
export const getAllSuccess = (images) =>
  ({ type: IMAGES_GET_ALL.success, payload: images });

/**
 * set the received images
 * @function getAllSuccess
 * @memberOf module:api/images/actions
 * @static
 *
 * @param error (Error) - the response error
 *
 * @returns {action} action object - { type: IMAGES_GET_ALL_ERROR }
 */
export const getAllError = (error) =>
  ({ type: IMAGES_GET_ALL.error, payload: error, error: true });

/**
 * get all the images
 * @function getAll
 * @memberOf module:api/images/actions
 * @static
 *
 * @returns {action} action object - { type: IMAGES_GET_ALL_REQUEST }
 */
export const getAll = () => (dispatch) => {
  dispatch(({ type: IMAGES_GET_ALL.request }));
  return api.getImages()
    .then((response) => dispatch(getAllSuccess(normalizeData(response))))
    .catch((error) => dispatch(getAllError(error)));
};
