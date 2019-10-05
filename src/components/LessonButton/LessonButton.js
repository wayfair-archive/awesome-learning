import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import analyticsEventHandler from '../../utils/analyticsEventHandler';
import './LessonButton.scss';

const handleEventClick = path => {
  try {
    analyticsEventHandler('exercise click', path);
  } catch (error) {
    console.error(error);
  }
};

export const PrimitiveLessonButton = ({
  path,
  onClick = handleEventClick,
  children
}) => (
  <a
    href={path}
    className="LessonButton-link"
    rel="noopener noreferrer"
    target="_blank"
    onClick={() => onClick(path)}
  >
    {children}
  </a>
);

export const PureLessonButton = ({path, data, defaultTab}) => {
  const {repoOwner} = data.site.siteMetadata;
  const fullPath = `https://codesandbox.io/s/github/${repoOwner}/awesome-learning-exercises/tree/master/${path}?fontsize=14&previewwindow=${defaultTab}`;
  return (
    <PrimitiveLessonButton path={fullPath}>
      Click here to start your exercises!
    </PrimitiveLessonButton>
  );
};

const LessonButton = props => (
  <StaticQuery
    query={graphql`
      query LessonButtonQuery {
        site {
          siteMetadata {
            repoName
            repoOwner
          }
        }
      }
    `}
    render={data => (
      <PureLessonButton data={data} {...props} onClick={handleEventClick} />
    )}
  />
);

PureLessonButton.propTypes = {
  path: PropTypes.string,
  onClick: PropTypes.string,
  children: PropTypes.string,
  data: PropTypes.string,
  defaultTab: PropTypes.string,
  path: PropTypes.string.isRequired,
  repoName: PropTypes.string,
  repoOwner: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

PureLessonButton.defaultProps = {
  repoName: 'awesome-learning',
  repoOwner: 'wayfair',
  onClick() {}
};
export default LessonButton;
