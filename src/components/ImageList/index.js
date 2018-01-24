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
import { IMAGE_RESOLUTION } from '../../api/images/constants';
import LoadedImage from '../../containers/LoadedImage';
import Row from '../Row';
import './ImageList.css';

const ImageList = ({
  images = [],
  resolution = 'thumbnail',
  height,
  scrollHeight,
  position
}) => (
  <div className="gallery-list" style={{ height: `${scrollHeight}px` }}>
    <Row align="center" className="gallery-list__row" style={{ top: position }}>
      {
        images.map((image) => (
          <LoadedImage
            key={image.key}
            height={height}
            color={image.prominentColor}
            url={image[resolution].url}
          />
        ))
      }
    </Row>
  </div>
);

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
    .oneOf(Object.keys(IMAGE_RESOLUTION).map((key) => IMAGE_RESOLUTION[key])),
  height: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired
};

export default ImageList;