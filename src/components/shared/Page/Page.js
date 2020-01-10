import React from 'react';
import PropTypes from 'prop-types';
import './Page.scss';

const Page = ({ title, children }) => (
  <div className="Page">
    <div className="Page-inner">
      { title && <h1 className="Page-title">{title}</h1>}
      <div className="Page-body">
        {children}
      </div>
    </div>
  </div>
);

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

Page.defaultProps = {
  children: null
};

export default Page;