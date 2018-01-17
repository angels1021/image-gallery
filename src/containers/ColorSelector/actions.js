/**
 * Action creators for the ColorPalette container
 * @module containers/ColorPalette/actions
 * @typicalname actions
 * */
import { SET_COLOR, TOGGLE_PICKER } from './constants';

/**
 * An action object.
 * @typedef {{type:(string),payload:(object)}} action
 * */

/**
 * Set a color filter
 * @function setColor
 * @memberOf module:containers/ColorPalette/actions
 * @static
 *
 * @param color (string) the new color to set
 *
 * @returns {action} action object - { type: SET_COLOR, payload: string }
 */
export const setColor = (color) => ({
  type: SET_COLOR,
  payload: color
});

/**
 * Clear the color filter
 * @function clearColor
 * @memberOf module:containers/ColorPalette/actions
 * @static
 *
 * @returns {action} action object - { type: CLEAR_COLOR }
 */
export const clearColor = () => setColor('');
/**
 * show/hide the color picker
 * @function togglePicker
 * @memberOf module:containers/ColorPalette/actions
 * @static
 *
 * @returns {action} action object - { type: TOGGLE_PICKER }
 */
export const togglePicker = () => ({
  type: TOGGLE_PICKER
});
