import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

const Content = ({ body, title }) => (
  <div className="Content">
    <h1 className="Content-title">{title}</h1>
    <div className="Content-body" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

Content.PropTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Content;
