import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Box, Typography, Button} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';
import {Link} from 'gatsby';

const ITEMS_PER_PAGE = 4;

const useStyles = makeStyles((theme) => ({
  backToContainer: {
    marginBottom: theme.spacing(4),
  },
  title: {
    width: 'fit-content',
    margin: theme.spacing(1, 0, 2),
    textDecoration: 'underline',
    textTransform: 'none',
    '&:hover, &:focus': {
      textDecoration: 'none',
    },
  },
  courseContainer: {
    margin: theme.spacing(5, 0, 14),
  },
  goLearnCTA: {
    width: '140px',
    marginTop: theme.spacing(4),
  },
}));

const Tracks = ({tracks}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const noOfPages = Math.ceil(tracks.length / ITEMS_PER_PAGE);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Typography variant="h1" color="textPrimary">
        Tech Talk Tracks
      </Typography>
      {tracks
        .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
        .map((track) => (
          <Box
            display="flex"
            flexDirection="column"
            key={track.frontmatter.title}
            className={classes.courseContainer}
          >
            <Typography
              variant="h2"
              component={Link}
              color="primary"
              to={track.fields.slug}
              className={classes.title}
            >
              {track.frontmatter.title}
            </Typography>
            <Typography variant="body1">
              {track.frontmatter.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={track.fields.slug}
              className={classes.goLearnCTA}
            >
              Go Learn
            </Button>
          </Box>
        ))}
      <Box display="flex" justifyContent="center">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </Box>
    </Box>
  );
};

export const trackPropType = PropTypes.shape({
  fields: PropTypes.shape({
    categorySlug: PropTypes.string,
    slug: PropTypes.string,
  }),
  frontmatter: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
  }),
});

Tracks.propTypes = {
  tracks: PropTypes.arrayOf(trackPropType),
};

export default Tracks;
