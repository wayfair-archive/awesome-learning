// Use this dropdown for the Meme Template API Response
// Consumes an object (memes) and returns a dropdown based on
// the key:value pairs of the object

import React from 'react';
import PropTypes from 'prop-types';

const MemeTemplatesDropdown = (props) => (
  <select onChange={props.onChange}>
    {Object.keys(props.memes).length > 0 ? (
      Object.keys(props.memes).map(
        (objectKey) => (
          <option
            key={objectKey}
            value={props.memes[objectKey]}
          >
            {objectKey}
          </option>
        )
      )
    ) : (
      <option value="">Loading data...</option>
    )}
  </select>
);

MemeTemplatesDropdown.propTypes = {
  memes: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

MemeTemplatesDropdown.defaultProps = {
  onChange() {}
};

export default MemeTemplatesDropdown;
