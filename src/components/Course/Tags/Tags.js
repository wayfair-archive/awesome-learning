import React from 'react';
import StyledLink from '../../shared/Link';
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

export default Tags;
