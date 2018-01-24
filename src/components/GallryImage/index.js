/**
 * GalleyImage component
 *
 * @module components/GalleyImage
 * @component GalleyImage
 * @typicalname GalleyImage
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './GalleryImage.css';

const GalleyImage = ({
  url,
  color,
  loaded,
  error
}) => (
  <div className="card gallery-image__card" style={{ height: '100%', margin: '0' }} >
    <div className={cn({ loaded }, 'card-image', 'gallery-image__img')} style={{ backgroundColor: color }}>
      {(!error) && (<img src={url} alt="missing" width="100%" height="100%" />)}
    </div>
  </div>
);

GalleyImage.propTypes = {
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};

export default GalleyImage;