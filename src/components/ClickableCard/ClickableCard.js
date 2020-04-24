import React from 'react';
import PropTypes from 'prop-types';
import { getIcon } from '../../utils';
import Icon from '../shared/Icon';
import './ClickableCard.scss';

const ClickableCard = ({ children, link=null, handleCardClick=null, iconName=null }) => {
  // Since either a link or onClick function is required, show an error to the developer if neither are passed in.
  if (!link && !handleCardClick) {
    console.error('No click action passed to ClickableCard. Please add a valid `link` or `handleCardClick` prop.');
  }

  const cardProps = link ? {href: link} : {onClick: handleCardClick};

  return (
    <a className="ClickableCard" {...cardProps} >
      {iconName &&
        <Icon icon={getIcon('hook')} cssClasses="ClickableCard-icon" />
      }
      {children}
    </a>
  );
};

ClickableCard.propTypes = {
  link: PropTypes.string,
  handleCardClick: PropTypes.func,
  iconName: PropTypes.string
};

export default ClickableCard;
