import React from 'react';
import PropTypes from 'prop-types';
import { getIcon } from '../../utils';
import Icon from '../shared/Icon';
import './ClickableCard.scss';

const ClickableCard = ({ children, link=null, handleCardClick=null, iconName=null }) => {
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

/*
 * Ensures that either the link or handleCardClick prop is set and validates the link prop if it exists.
 */
const linkPropCheck = ({link, handleCardClick}, propName, componentName) => {
  // This could as easily be located in handleClickPropCheck, either way.
  if (!link && !handleCardClick) {
    return new Error(`Please provide either a link or a handleCardClick function to the ${componentName} component.`);
  }
  if (link) {
    PropTypes.checkPropTypes(
      {link: PropTypes.string},
      {link},
      'prop',
      componentName
    );
  }
  return null;
};

/*
 * Validates the handleCardClick prop if it exists.
 */
const handleClickPropCheck = ({handleCardClick}, propName, componentName) => {
  if (handleCardClick) {
    PropTypes.checkPropTypes(
      {handleCardClick: PropTypes.func},
      {handleCardClick},
      'prop',
      componentName
    );
  }
  return null;
};

ClickableCard.propTypes = {
  children: PropTypes.node.isRequired,
  link: linkPropCheck,
  handleCardClick: handleClickPropCheck,
  iconName: PropTypes.string
};

export default ClickableCard;
