import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

const Icon = ({ icon, cssClasses = "" }) => (
  <svg className={`Icon ${cssClasses}`} viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
);

Icon.PropTypes = {
  icon: PropTypes.shape({
    path: PropTypes.string,
    viewBox: PropTypes.string
  })
};

export default Icon;
