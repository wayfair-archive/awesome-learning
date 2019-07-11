import React from 'react';

const CoursePreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="course">
      <h1 className="course__title">{title}</h1>
      <div className="course__body">{body}</div>
    </div>
  );
};

export default CoursePreview;
