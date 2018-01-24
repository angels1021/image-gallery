import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll } from '../../api/images/actions';
import { IMAGE_RESOLUTION, IMAGE_SIZES } from '../../api/images/constants';
import { prefetchBySize } from '../../utils/prefetch';
import ImageList from '../../components/ImageList';
import './GalleryList.css';

const createLoadedState = () =>
  Object.keys(IMAGE_RESOLUTION)
    .reduce((collection, key) => ({ ...collection, [key]: 0 }), {});

const resolutionShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired
});

class GalleryList extends Component {

  static defaultProps = {
    resolution: 'thumbnail'
  };

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.number.isRequired,
      prominentColor: PropTypes.string.isRequired,
      thumbnail: resolutionShape.isRequired,
      low_resolution: resolutionShape.isRequired,
      standard_resolution: resolutionShape.isRequired,
    })).isRequired,
    resolution: PropTypes
      .oneOf(Object.keys(IMAGE_RESOLUTION)),
    getImages: PropTypes.func.isRequired
  };

  state = {
    scrollHeight: 0,
    toRender: [],
    perRow: 0,
    loaded: createLoadedState(),
    perLoad: 0,
    scrollY: 0
  };

  componentWillMount() {
    const { getImages } = this.props;
    getImages();
  }

  componentDidMount() {
    this.ref.addEventListener('scroll', this.onScroll);
  }

  componentWillReceiveProps({ images, resolution }) {
    if ((images.length === this.props.images.length) && (resolution === this.props.resolution)){
      return;
    }
    this.resetSizing(images, resolution);
    setTimeout(this.onScroll, 0);
  }

  onScroll = () => {
    const scrollY = this.ref.scrollTop;
    const { images, resolution } = this.props;
    if (!images.length) return;
    const { perRow, perLoad, loaded } = this.state;
    const imageHeight = Math.min(IMAGE_SIZES[resolution], window.innerWidth);
    const rowsOutOfView = Math.floor(scrollY / imageHeight);
    const itemsOutOfView = rowsOutOfView * perRow;
    const toRender = images.slice(itemsOutOfView, (itemsOutOfView + perLoad));
    if (!toRender.length) return;
    const haveLoaded = loaded[resolution];
    const lastToRender = toRender[toRender.length - 1].key;
    if (haveLoaded + perLoad < lastToRender) {
      const end = Math.min(images.length, haveLoaded + perLoad);
      const toLoad = images.slice(haveLoaded, end);
      this.setState({ loaded: { ...loaded, [resolution]: end } });
      prefetchBySize(resolution, toLoad, toLoad.length);
    }
    const leftOver = scrollY % imageHeight;
    this.setState({ toRender, scrollY: (scrollY - leftOver) });
  };

  resetSizing = (images, resolution) => {
    const imageHeight = IMAGE_SIZES[resolution];
    const { height, width } = this.ref.getBoundingClientRect();
    const perRow = Math.floor(width / imageHeight);
    const perCol = Math.floor(height / imageHeight);
    const scrollHeight = Math.ceil(images.length / perRow) * (imageHeight);
    const perLoad = perRow * (perCol + 2);
    this.setState({ scrollHeight, perRow, perLoad });

    this.ref.scrollTop = 0;
  };

  ref = null;

  render() {
    const { scrollHeight, toRender, scrollY } = this.state;
    const { resolution, isLoading, errorMessage } = this.props;
    const imageHeight = Math.min(IMAGE_SIZES[resolution], window.innerWidth);
    const resKey = IMAGE_RESOLUTION[resolution];
    return (
      <div
        className="flex-child-grow gallery-view"
        ref={(node) => { this.ref = node; }}
      >
        { toRender && (
          <ImageList
            images={toRender}
            resolution={resKey}
            height={imageHeight}
            scrollHeight={scrollHeight}
            position={scrollY}
          />
        )}
        {
          isLoading && (<div>Loading...</div>)
        }
        {
          errorMessage && (<div className="callout danger" >{errorMessage}</div>)
        }
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
  getImages: () => dispatch(getAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryList);
