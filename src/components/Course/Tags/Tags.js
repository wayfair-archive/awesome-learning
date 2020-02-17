import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from '../../shared/StyledLink';
import './Tags.scss';

const Tags = ({ tags, tagSlugs }) => (
  <div className="Tags">
    <ul className="Tags-list">
      {tagSlugs.map((slug, i) => (
        <li className="Tags-listItem" key={`${tags[i]}slug`}>
          <StyledLink variation="pill" path={slug}>
            {tags[i]}
          </StyledLink>
        </li>
      ))}
    </ul>
  </div>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  tagSlugs: PropTypes.array.isRequired
};

export default Tags;
