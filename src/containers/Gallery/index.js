/**
 * Gallery container
 *
 * @module path/to/file/index
 * @component Gallery
 * @typicalname Gallery
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll } from '../../api/images/actions';
import { SIZE_RESOLUTION } from '../../api/images/constants';
import ImageList from '../../components/ImageList';

const imageResolutionShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired
});

class Gallery extends Component {
  static propTypes = {
    resolution: PropTypes.oneOf(Object.keys(SIZE_RESOLUTION)).isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      prominentColor: PropTypes.string.isRequired,
      thumbnail: imageResolutionShape,
      low_resolution: imageResolutionShape,
      standard_resolution: imageResolutionShape
    })),
    isLoading: PropTypes.bool,
    errorMessage: PropTypes.string,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
  };

  static defaultProps = {
    images: [],
    isLoading: false,
    errorMessage: ''
  };

  componentWillMount() {
    const { getImages } = this.props.actions;
    getImages();
  }

  render() {
    const {
      images,
      resolution,
      isLoading,
      errorMessage
    } = this.props;
    return (
      <div>
        {images && <ImageList images={images} resolution={resolution} />}
        {isLoading && <div className="text-center" >Loading...</div>}
        {errorMessage && <div className="callout alert" >{errorMessage}</div>}
      </div>
    );
  }
}

const filterImages = (images, color = '') => {
  if (!color) return images;
  return images.filter((img) => img.prominentColor === color);
};

const mapStateToProps = (state) => ({
  images: filterImages(state.images.items, state.color.value),
  resolution: state.resolution,
  isLoading: state.images.loading,
  errorMessage: state.images.error && state.images.error.message,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    getImages: () => dispatch(getAll())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);