import React from 'react';
import PropTypes from 'prop-types';

const MemeAliases = (props) => {
  if (props.meme) {
    return (
      <ul>
        {props.meme.aliases.map((alias, key) => (
          <li key={key}>
            {alias.split('-').join(' ')}
          </li>
        ))}
      </ul>
    );
  } else {
    return <div />;
  }
};

MemeAliases.propTypes = {
  meme: PropTypes.object.isRequired
};

export default MemeAliases;
