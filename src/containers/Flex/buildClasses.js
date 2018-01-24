/**
 * @module utils/buildClasses
 */
import words from 'lodash/words';

const toArray = (value) => words(value, /([^,\s])+/gi);

/**
 * build style classNames by passed in sets
 * @function buildClasses
 * @static
 * @param {...object} classes                - object definition of how to construct the class
 * @param {array<string>|string} classes.values   - passed in class names to match
 * @param {array<string>} [classes.dictionary=[]] - set dictionary to match values against.
 * if a dictionary is not passed, all classes.values will be returned
 * @param {function} [classes.template=(val) => val] - template function which will receive the value and return ta parsed string.
 *
 * @returns {array<string>} all valid classes
 */
const buildClasses = (...classes) =>
  classes
    .reduce((collection, { values, dictionary = [], template = (val) => val }) => {
      if (!values) return collection;
      const classNames = !dictionary.length
        ? toArray(values)
        : toArray(values).filter((value) => dictionary.includes(value));
      return [
        ...collection,
        ...classNames.map((value) => template(value))];
    }, []).join(' ');

export default buildClasses;
