/**
 * ImageList component
 *
 * @module path/to/file/index
 * @component ImageList
 * @typicalname ImageList
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_RESOLUTION, IMAGE_SIZES } from '../../api/images/constants';
import Image from '../Image';
import './ImageList.css';

const ImageList = ({ images = [], resolution = 'thumbnail' }) => {
  const imageHeight = Math.min(IMAGE_SIZES[resolution], window.innerWidth);
  const imageResolution = IMAGE_RESOLUTION[resolution];
  return (
    <div className="gallery-view grid-x medium-unstack align-center">
      {
        images.map((img) =>
          (<Image
            key={img.key}
            url={img[imageResolution].url}
            height={imageHeight}
          />))
      }
    </div>
  );
};

const resolutionShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired
});

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isRequired,
    prominentColor: PropTypes.string.isRequired,
    thumbnail: resolutionShape.isRequired,
    low_resolution: resolutionShape.isRequired,
    standard_resolution: resolutionShape.isRequired,
  })).isRequired,
  resolution: PropTypes //eslint-disable-line react/require-default-props
    .oneOf(Object.keys(IMAGE_RESOLUTION))
};

export default ImageList;