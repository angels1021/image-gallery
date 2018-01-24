/**
 * @module common/containers/flexBox/flexClasses
 * @typicalname flexClasses
 * */
import buildClasses from './buildClasses';

const gridAlign = [
  'left',
  'right',
  'center',
  'justify',
  'spaced',
  'top',
  'bottom',
  'middle',
  'stretch',
  'self-top',
  'self-bottom',
  'self-middle',
  'self-stretch'
];

const subAlign = [
  'top',
  'bottom',
  'middle',
  'stretch'
];

const gridDirection = ['row', 'row-reverse', 'column', 'column-reverse'];

/**
 * Reduce all classes passed to single array.
 * align and direction classes will be prefixed
 * according to the grid and direction sets.
 *
 * @memberOf module:common/containers/flexBox/flexClasses
 * @static
 * @function buildClasses
 *
 * @param {
 * ''|
 * 'left'|
 * 'right'|
 * 'center'|
 * 'justify'|
 * 'spaced'|
 * 'top'|
 * 'bottom'|
 * 'middle'|
 * 'stretch'|
 * 'self-top'|
 * 'self-bottom'|
 * 'self-middle'|
 * 'self-stretch'
 * } align - classes to be prefixed according gridAlign
 * @param {
 * ''|
 * 'row'|
 * 'row-reverse'|
 * 'column'|
 * 'column-reverse'
 * } direction - classes to be prefixed according gridDirection
 * @param {...string} classes - any additional classes
 * @return {Array}
 */
const flexClasses = (align, direction, ...classes) => buildClasses(
  {
    values: align,
    dictionary: gridAlign,
    template: (val) => `align-${val}`
  },
  {
    values: direction,
    dictionary: gridDirection,
    template: (val) => `flex-dir-${val}`
  },
  {
    values: classes
  }
);

/**
 * Similar to buildClasses but allows only child alignment.
 * and does not accept direction.
 *\
 * @memberOf module:common/containers/flexBox/flexClasses
 * @static
 * @function flexChildClasses
 * @param {'top'|'bottom'|'middle'|'stretch'} align - valid flex children alignment option
 * @param {...string} classes
 */
export const flexChildClasses = (align, ...classes) => buildClasses(
  {
    values: align,
    dictionary: subAlign,
    template: (val) => `align-self-${val}`
  },
  {
    values: classes
  }
);

export default flexClasses;
