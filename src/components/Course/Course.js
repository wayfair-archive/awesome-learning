import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box, Button} from '@material-ui/core';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    padding: theme.spacing(2, 0, 6),
  },
  linkTitle: {
    textTransform: 'uppercase',
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.secondary.dark,
      textDecoration: 'none',
    },
  },
  sectionWrapper: {
    padding: theme.spacing(4, 0 ,4),
  },
  courseCardItem: {
    margin: theme.spacing(3, 0 ,3),
  },
  tagWrapper: {
    marginRight: theme.spacing(2),
  },
  tag: {
    root: {
      color: 'red',
    }
  }
})
);

const Tag = withStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}))(Button);

const Course = ({ course }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { tags, title, description, lessons } = course.frontmatter;
  const { tagSlugs, slug } = course.fields;
  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Typography variant="h4" color="secondary" component="a" href="/courses" className={classes.linkTitle}>
        Back to Courses
      </Typography>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h2" className={classes.sectionTitle}>{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
      {lessons.map(({ link, title, description }) => {
        const composedLink = `${slug}${link}`;
        return (
          <Box key={title} className={classes.sectionWrapper}>
            <Typography variant="h3" className={classes.courseCardItem}>{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Button variant="contained" color="primary" href={composedLink} className={classes.courseCardItem}>Learn {title}</Button>
          </Box>
        );
      })}
      {tags.length > 2 && (
        <Box className={classes.sectionWrapper}>
          <Typography variant="h4">Related Themes</Typography>
          <Box m={theme.spacing(4, 0)}>
            {tagSlugs.map((slug, i) => (
              <Box display="inline" key={`${tags[i]}slug`} className={classes.tagWrapper}>
                <Tag variant="outlined" color="secondary" key={`${tags[i]}slug`} href={slug}>
                  {tags[i]}
                </Tag>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    frontmatter: PropTypes.shape({
      tags: PropTypes.array,
      title: PropTypes.string,
      description: PropTypes.node,
      lessons: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    fields: PropTypes.shape({
      tagSlugs: PropTypes.array,
      slug: PropTypes.string
    })
  })
};

export default Course;
