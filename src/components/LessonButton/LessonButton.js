import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { OutboundLink } from 'gatsby-plugin-gtag'
import "./LessonButton.scss";

export const PureLessonButton = ({ path, data }) => {
  const { repoOwner } = data.site.siteMetadata;
  const fullPath = `https://codesandbox.io/s/github/${repoOwner}/awesome-learning-exercises/tree/master/${path}?fontsize=14&previewwindow=tests`;
  return (
    <OutboundLink
      className="LessonButton-link"
      href={fullPath}
      rel="noopener noreferrer"
      target="_blank"
    >
      Click here to start your exercises!
    </OutboundLink>
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
