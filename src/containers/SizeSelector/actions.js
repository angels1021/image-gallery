/**
 * Action creators for SizeSelector.
 * @module containers/SizeSelector/actions
 * @typicalname actions
 * */
import { SET_SIZE } from './constants';

/**
 * An action object.
 * @typedef {{type:(string),payload:(object)}} action
 * */

/**
 * set the image size tobe displayed
 * @function setSize
 * @memberOf module:containers/SizeSelector/actions
 * @static
 *
 * @see [SIZE_RESOLUTION keys](module:api/images/constants.SIZE_RESOLUTION)
 * @param size ('thumbnail' | 'low' | 'standard')
 *
 * @returns {action} action object - { type: SET_SIZE, payload: string }
 */
export const setSize = (size) => ({
  type: SET_SIZE,
  payload: size
});
