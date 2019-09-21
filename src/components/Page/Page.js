import React from 'react';
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

export default Page;