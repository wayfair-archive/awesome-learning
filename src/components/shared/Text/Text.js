import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Text.scss';

const Text = (props) => {
  const textClasses = cx('Text', {
    'Text--large': props.fontSize === 'large',
    'Text--xl': props.fontSize === 'xl'
  });
  return (
    <p className={textClasses}>{props.children}</p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.oneOf(['body', 'large', 'xl'])
};

Text.defaultProps = {
  fontSize: 'body'
};

export default Text;
