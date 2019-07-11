import React from 'react';
import './Content.scss';

const Content = ({ body, title }) => (
  <div className="Content">
    <h1 className="Content-title">{title}</h1>
    <div className="Content-body" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
