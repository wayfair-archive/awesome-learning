import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-gtag";
import analyticsEventHandler from "../../utils/analyticsEventHandler";
import "./LessonButton.scss";

const handleEventClick = (path) => {
  try {
    analyticsEventHandler("exercise click", path);
  } catch (error) {
    console.log(error);
  }
};

export const PureLessonButton = ({
  defaultTab, path, data, onClick
}) => {
  const { repoOwner } = data.site.siteMetadata;
  const fullPath = `https://codesandbox.io/s/github/${repoOwner}/awesome-learning-exercises/tree/master/${path}?fontsize=14&previewwindow=${defaultTab}`;
  return (
    <OutboundLink
      className="LessonButton-link"
      href={fullPath}
      rel="noopener noreferrer"
      target="_blank"
      onClick={() => onClick(path)}
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
  repoName: "awesome-learning",
  repoOwner: "wayfair",
  onClick() {}
};
export default LessonButton;
