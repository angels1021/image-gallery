/**
 * SizeSelect component
 *
 * @module path/to/file/index
 * @component SizeSelect
 * @typicalname SizeSelect
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  options = [],
  selected,
  onSelect,
  ...otherProps
}) => (
  <select onChange={(e) => onSelect(e.target.value)} {...otherProps}>
    {options.map((opt) => (
      <option
        key={opt.value}
        value={opt.value}
        defaultValue={opt.value === selected}
      >
        {opt.label}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })).isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Select;