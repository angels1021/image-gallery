/**
 * Image component
 *
 * @module components/Image
 * @component Image
 * @typicalname Image
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Box from '../Box';
import './Image.css';

const Image = ({ url, height }) => (
  <div className="gallery-image" style={{ width: `${height}px` }}>
    <LazyLoad height={height} offset={height * 3} >
      <Box>
        <div className="card">
          <div className="card-image">
            <img src={url} height="100%" alt="missing" />
          </div>
        </div>
      </Box>
    </LazyLoad>
  </div>
);

Image.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired
};

export default Image;