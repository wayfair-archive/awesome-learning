import React from "react";
import PropTypes from 'prop-types';
import cx from 'classnames';
import Block from './shared/Block';
import './SectionTitle.scss';

const SectionTitle = (props) => {
  const sectionTitleClasses = cx('SectionTitle', {
    'SectionTitle--body': props.fontSize === 'xl',
    'SectionTitle--uppercase': props.textTransform === true
  });
  const Heading = `${props.headingLevel}`;
  return (
    <Block mb={props.mb}>
      <Heading className={sectionTitleClasses}> {props.children} </Heading>
    </Block>
  );
};
SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  headingLevel: PropTypes.oneOf(['h2', 'h3', 'h4']),
  fontSize: PropTypes.oneOf(['body', 'large', 'xl']),
  textTransform: PropTypes.bool,
  mb: PropTypes.string
};

SectionTitle.defaultProps = {
  headingLevel: 'h2',
  fontSize: 'large',
  textTransform: false,
  mb: '0px'
};

export default SectionTitle;
