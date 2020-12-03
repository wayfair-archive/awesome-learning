import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    textDecoration: 'underline',
    margin: theme.spacing(3, 0, 6),
  },
  courseContainer: {
    margin: theme.spacing(13, 0 , 14),
  },
  title: {
    margin: theme.spacing(2, 0, 5),
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
  goLearnCTA: {
    width: '140px',
    marginTop: theme.spacing(4),
  },
})
);

const Courses = ({ edges }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Typography variant="h1" className={classes.pageTitle}>Courses</Typography>
      {edges.map(edge => (
        <Box key={edge.node.fields.slug} className={classes.courseContainer}>
          <Typography
            variant="h3"
            component="a"
            display="block"
            color="textPrimary"
            href={edge.node.fields.slug}
            className={classes.title}
          >
            {edge.node.frontmatter.title}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
            component="a"
            display="block"
            href={edge.node.fields.categorySlug}
            className={classes.title}
          >
            {edge.node.frontmatter.category}
          </Typography>
          <Typography variant="body1">{edge.node.frontmatter.description}</Typography>
          <Button variant="contained" color="secondary" href={edge.node.fields.slug} className={classes.goLearnCTA}>Go Learn</Button>
        </Box>
      ))}
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Box>
  );
};

Courses.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Courses;
