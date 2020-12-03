import React from 'react';
import PropTypes from 'prop-types';
import {Button, Box} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';

import './Tags.scss';

const Tags = ({ tags, tagSlugs }) => {
  const theme = useTheme();
  return (
    <div className="Tags">
      {tagSlugs.map((slug, i) => (
        <Box display="inline" m={theme.spacing(2,1)} key={`${tags[i]}slug`}>
          <Button variant="outlined" color="primary" href={slug}>
            {tags[i]}
          </Button>
        </Box>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  tagSlugs: PropTypes.array.isRequired
};

export default Tags;
