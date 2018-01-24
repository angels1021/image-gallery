import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../containers/Flex';

const FlexBox = ({
  align = '',
  direction = '',
  className = '',
  children
}) => (
  <Flex
    {...{ align, direction }}
    render={(classes) => (
      <div className={`${classes} ${className} flex-container`} >{children}</div>
    )}
  />
);

FlexBox.propTypes = {
  className: PropTypes.string, //eslint-disable-line react/require-default-props
  align: PropTypes.string, //eslint-disable-line react/require-default-props
  direction: PropTypes.oneOf([ //eslint-disable-line react/require-default-props
    '', 'row', 'row-reverse', 'column', 'column-reverse'
  ]),
  children: PropTypes.node.isRequired
};

export default FlexBox;
