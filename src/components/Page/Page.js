import React, { useRef, useEffect } from 'react';
import './Page.scss';

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
    window.scrollBy(0, -90);
  });

  return (
    <div ref={pageRef} className="Page">
      <div className="Page-inner">
        { title && <h1 className="Page-title">{title}</h1>}
        <div className="Page-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;