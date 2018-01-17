/**
 * SizeSelector container
 * @module containers/SizeSelector
 * */

import { connect } from 'react-redux';
import SizeSelect from '../../components/SizeSelect';
import { setSize } from './actions';

const mapStateToProps = (state) => ({
  selected: state.resolution,
});

const mapDispatchToProps = (dispatch) => ({
  onSelect: (value) => dispatch(setSize(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SizeSelect);
