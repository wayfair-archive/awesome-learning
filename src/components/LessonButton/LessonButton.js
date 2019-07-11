import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";

export const PureLessonButton = ({ path, data }) => {
  const {
    repoName,
    repoOwner
  } = data.site.siteMetadata;
  const fullPath = `https://codesandbox.io/s/github/${repoOwner}/${repoName}/tree/master/${path}?fontsize=14&previewwindow=tests`;
  return (
    <a href={fullPath} rel="noopener noreferrer" target="_blank">
      Click here to start your exercises!
    </a>
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
    render={data => <PureLessonButton data={data} {...props} />}
  />
);

PureLessonButton.propTypes = {
  path: PropTypes.string.isRequired,
  repoName: PropTypes.string,
  repoOwner: PropTypes.string
};

export default LessonButton;
