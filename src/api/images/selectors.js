/**
 * Selectors for api/images.
 * @module api/images/selectors
 * @typicalname selectors
 *
 * @requires [reselect](https://www.npmjs.com/package/reselect)
 * @requires [lodash/memoize](https://www.npmjs.com/package/lodash/memoize)
 */

/**
 * @callback Selector - memoized function
 * @param {object} state - Immutable Map of the app state
 * @param {object} props - component props
 *
 * @return {*}
 * */

/**
 * @callback Selector~selectorCreator
 * @return {Selector}
 * */

// import {createSelector} from 'reselect';
// import memoize from 'lodash/memoize';

// plain selectors, single memoize cache
/**
 * select state.images
 * @memberOf module:api/images/selectors
 * @static
 * @function selectImages
 *
 * @returns {Selector~selectorCreator}
 * */
export const selectImages = () => (state) => state.images;
