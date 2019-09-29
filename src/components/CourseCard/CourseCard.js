import React from "react";
import PropTypes from "prop-types";
import StyledLink from "../Link";
import Block from "../Block";
import "./CourseCard.scss";

const CourseCard = ({ title, description, link }) => {
  return (
    <li className="CourseCard">
      <Block is="h3" mb="16px">
        <StyledLink path={link}>
          {title}
        </StyledLink>
      </Block>
      <Block is="p" mb="16px">
        {description}
      </Block>
      <StyledLink variation="pill" path={link}>
        Learn {title}
      </StyledLink>
    </li>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default CourseCard;
