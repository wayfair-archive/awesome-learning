import React from "react";
import PropTypes from "prop-types";
import StyledLink from "../Link";
import Block from "../Block";
import "./CourseCard.scss";

const CourseCard = ({ title, description, link }) => {
  const amountOfWords = title.split(' ');
  return (
    <li className="CourseCard">
      <Block is="h3" mb="16px">
        {title}
      </Block>
      <Block is="p" mb="16px">
        {description}
      </Block>
      <StyledLink variation="pill" path={link}>
        {amountOfWords.length > 2
          ? <p style={{ fontSize: 13 }}>Learn {title}</p>
          : <p>Learn {title}</p>
        }
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
