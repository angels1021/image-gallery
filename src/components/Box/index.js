/**
 * Box component
 * create square containers
 *
 * @module components/Box
 * @component Box
 * @typicalname Box
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * @requires [classnames]{@link https://www.npmjs.com/package/classnames}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Box.css';

const Box = ({ children, className = '', ...otherProps }) =>
  (<div className={cn('square', className)} {...otherProps} >{children}</div>);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string // eslint-disable-line react/require-default-props
};

export default Box;
