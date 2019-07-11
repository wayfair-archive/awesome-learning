import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import "./trackCard.scss";

const TrackCard = props => (
  <Link className="TrackCard-card" to={props.path}>
    {props.icon}
    <h3 className="TrackCard-title">{props.title}</h3>
    <p className="TrackCard-text">{props.subTitle}</p>
  </Link>
);

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  path: PropTypes.string,
};

TrackCard.defaultProps = {
  path: '/',
};

export default TrackCard;
