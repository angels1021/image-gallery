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
import { IMAGE_RESOLUTION } from '../../api/images/constants';
import Select from '../Select';
import './SizeSelect.css';

const sizeOptions = Object.keys(IMAGE_RESOLUTION)
  .reduce((collected, key) =>
    [...collected, {
      label: key,
      value: key
    }], []);

const SizeSelect = ({ selected, onSelect }) => (
  <Select className="size-select margin-0" options={sizeOptions} selected={selected} onSelect={onSelect} />
);

SizeSelect.propTypes = {
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SizeSelect;