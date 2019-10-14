import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import {useLastLessonContext} from '../../providers/LastLessonProvider';
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
  children,
  lessonData
}) => {
  const {setLastLessonVisited} = useLastLessonContext();
  return (
    <a
      href={path}
      className="LessonButton-link"
      rel="noopener noreferrer"
      target="_blank"
      onClick={() => {
        if (lessonData) setLastLessonVisited(lessonData);
        onClick(path);
      }}
    >
      {children}
    </a>
  );
};

export const PureLessonButton = ({path, data, defaultTab, ...props}) => {
  const {repoOwner} = data.site.siteMetadata;
  const fullPath = `https://codesandbox.io/s/github/${repoOwner}/awesome-learning-exercises/tree/master/${path}?fontsize=14&previewwindow=${defaultTab}`;
  return (
    <PrimitiveLessonButton
      path={fullPath}
      onClick={handleEventClick}
      {...props}
    >
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
