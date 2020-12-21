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

const Courses = ({edges, title}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const noOfPages = Math.ceil(edges.length / ITEMS_PER_PAGE);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  const titleText = title ? `Courses: ${title}` : 'Courses';

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      {title && (
        <Box className={classes.backToContainer}>
          <Button component={Link} to="/courses">
            Back to Courses
          </Button>
        </Box>
      )}
      <Typography variant="h1" color="textPrimary">
        {titleText}
      </Typography>
      {edges
        .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
        .map((edge) => (
          <Box
            display="flex"
            flexDirection="column"
            key={edge.node.frontmatter.title}
            className={classes.courseContainer}
          >
            <Typography
              variant="h2"
              component={Link}
              color="primary"
              to={edge.node.fields.slug}
              className={classes.title}
            >
              {edge.node.frontmatter.title}
            </Typography>
            <Typography variant="body1">
              {edge.node.frontmatter.description}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={edge.node.fields.slug}
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

Courses.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

Courses.defaultProps = {
  title: '',
};

export default Courses;
