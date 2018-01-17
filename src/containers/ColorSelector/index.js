/**
 * ColorPalette container
 * @module containers/ColorPalette/index
 * */

import { connect } from 'react-redux';
import ColorPicker from '../../components/ColorPicker';
import { setColor, togglePicker } from './actions';

const mapStateToProps = (state) => ({
  colors: state.images.colors,
  value: state.color.value,
  showPicker: state.color.showPicker
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (hex) => dispatch(setColor(hex)),
  togglePicker: () => dispatch(togglePicker())
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
