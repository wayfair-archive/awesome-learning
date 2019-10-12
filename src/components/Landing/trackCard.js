import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import SectionTitle from "../SectionTitle";
import Text from "../Text";
import Icon from "../Icon";
import "./trackCard.scss";

const TrackCard = ({path, icon, title, subTitle, ...restProps}) => (
  <Link className="TrackCard" to={path} {...restProps}>
    <div className="TrackCard-iconWrap">
      <Icon icon={icon} cssClasses="TrackCard-icon" />
    </div>
    <SectionTitle textTransform headingLevel="h3" mb="8px">
      {title}
    </SectionTitle>
    <Text>{subTitle}</Text>
  </Link>
);

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  path: PropTypes.string
};

TrackCard.defaultProps = {
  path: "/"
};

export default TrackCard;
