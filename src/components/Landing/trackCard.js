import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SectionTitle from '../SectionTitle';
import Text from '../shared/Text';
import Icon from '../shared/Icon';
import './trackCard.scss';

const TrackCard = props => (
  <Link className="TrackCard" to={props.path}>
    <div className="TrackCard-iconWrap">
      <Icon icon={props.icon} cssClasses="TrackCard-icon" />
    </div>
    <SectionTitle textTransform headingLevel="h3" mb="8px">
      {props.title}
    </SectionTitle>
    <Text>{props.subTitle}</Text>
  </Link>
);

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  path: PropTypes.string
};

TrackCard.defaultProps = {
  path: '/'
};

export default TrackCard;
