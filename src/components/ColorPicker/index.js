/**
 * ColorPicker component
 *
 * @module components/ColorPicker
 * @component ColorPicker
 * @typicalname ColorPicker
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';
import './ColorPicker.css';

const ColorPicker = ({
  value,
  showPicker = false,
  colors,
  onChange,
  togglePicker
}) => (
  <div className="color-filter">
    <div className="button-group small">
      <button
        className="button clear"
        onClick={togglePicker}
        style={{ backgroundColor: (value || '#fff') }}
      >
      </button>
      <button className="button alert" onClick={() => onChange('')}>
        X
      </button>
    </div>
    {
      showPicker &&
      <div className="color-filter__picker">
        <BlockPicker
          colors={colors.slice(0, 20)}
          color={value}
          onChangeComplete={(color) => {
            onChange(color.hex);
            togglePicker();
          }}
          height="300px"
        />
      </div>
    }
  </div>
);

ColorPicker.propTypes = {
  value: PropTypes.string.isRequired,
  showPicker: PropTypes.bool, //eslint-disable-line
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  togglePicker: PropTypes.func.isRequired
};

export default ColorPicker;