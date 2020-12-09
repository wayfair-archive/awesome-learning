import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Box, Typography, Button} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';

const COURSES_LINK = '/courses';

const useStyles = makeStyles((theme) => ({
  title: {
    width: 'fit-content',
    margin: theme.spacing(2, 0, 5),
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
  courseContainer: {
    margin: theme.spacing(10, 0, 14),
  },
  goLearnCTA: {
    width: '140px',
    marginTop: theme.spacing(4),
  },
}));

const Courses = ({edges}) => {
  const classes = useStyles();
  const theme = useTheme();
  const itemsPerPage = 4;
  const [page, setPage] = useState(1);
  const noOfPages = Math.ceil(edges.length / itemsPerPage);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Typography
        variant="h1"
        color="textPrimary"
        component="a"
        href={COURSES_LINK}
        className={classes.title}
      >
        Courses
      </Typography>
      {edges
        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((edge) => (
          <Box
            display="flex"
            flexDirection="column"
            key={edge.node.frontmatter.title}
            className={classes.courseContainer}
          >
            <Typography
              variant="h2"
              component="a"
              color="textPrimary"
              href={edge.node.fields.slug}
              className={classes.title}
            >
              {edge.node.frontmatter.title}
            </Typography>
            <Typography
              color="textSecondary"
              variant="h4"
              component="a"
              href={edge.node.fields.categorySlug}
              className={classes.title}
            >
              {edge.node.frontmatter.category}
            </Typography>
            <Typography variant="body1">
              {edge.node.frontmatter.description}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              href={edge.node.fields.slug}
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
};

export default Courses;
