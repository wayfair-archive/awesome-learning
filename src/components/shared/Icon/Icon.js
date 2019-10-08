import React from 'react';
import './Icon.scss';

const Icon = ({ icon, cssClasses = '' }) => (
  <svg className={`Icon ${cssClasses}`} viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
);

export default Icon;
