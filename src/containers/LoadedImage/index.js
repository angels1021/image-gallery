import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryImage from '../../components/GallryImage';
import './LoadedImage.css';

class LoadedImage extends Component {

  static propTypes = {
    height: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  state = {
    loaded: false,
    error: false,
    inView: false
  };

  componentWillMount() {
    this.image.onload = this.setLoaded;
    this.image.onerror = this.setError;
    this.setState({ inView: true });
    this.loadImage();
  }

  componentWillUnmount() {
    this.setState({ inView: false });
  }

  setLoaded = () => {
    if (!this.state.inView) return;
    this.setState({ loaded: true, error: false });
  };

  setError = () => {
    if (!this.state.inView) return;
    this.setState({ error: true, loaded: false });
  };

  loadImage = () => {
    const { url } = this.props;
    if (this.image.src === url) return;
    this.image.src = url;
  };

  image = new Image();

  render() {
    const { height, color } = this.props;
    const { loaded, error } = this.state;
    return (
      <div
        className="gallery-image cell"
        style={{ height: `${height}px`, width: `${height}px` }}
      >
        {
          <GalleryImage
            {
              ...{
                height,
                color,
                loaded,
                error,
                url: this.image.src
              }
            }
          />
        }
      </div>
    );
  }
}

export default LoadedImage;
