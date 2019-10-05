import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from "../../Link";
import './Tags.scss';

const Tags = ({ tags, tagSlugs }) => (
  <div className="Tags">
    <ul className="Tags-list">
      {tagSlugs.map((slug, i) => (
        <li className="Tags-listItem" key={`${tags[i]}slug`}>
          <StyledLink variation={"pill"} path={slug}>
            {tags[i]}
          </StyledLink>
        </li>
      ))}
    </ul>
  </div>
);

Tags.PropTypes = {
  tags: PropTypes.array,
  tagSlugs: PropTypes.array
}

export default Tags;
