import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box, Button} from '@material-ui/core';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    padding: theme.spacing(2, 0, 6),
  },
  sectionWrapper: {
    padding: theme.spacing(4, 0, 4),
  },
  courseCardItem: {
    margin: theme.spacing(3, 0, 3),
  },
  relatedThemesTitle: {
    marginBottom: theme.spacing(4),
  },
}));

const Tag = withStyles((theme) => ({
  root: {
    display: 'inline-block',
    margin: theme.spacing(0, 2, 2, 0),
    padding: theme.spacing(2),
  },
}))(Button);

const Course = ({course}) => {
  const classes = useStyles();
  const theme = useTheme();
  const {tags, title, description, lessons} = course.frontmatter;
  const {tagSlugs, slug} = course.fields;
  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Button href="/courses">Back to Courses</Button>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h2" className={classes.sectionTitle}>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
      {lessons.map(({link, title, description}) => (
        <Box key={title} className={classes.sectionWrapper}>
          <Typography variant="h3" className={classes.courseCardItem}>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Button
            variant="contained"
            color="primary"
            href={`${slug}${link}`}
            className={classes.courseCardItem}
          >
            Learn {title}
          </Button>
        </Box>
      ))}
      {tags.length > 2 && (
        <Box className={classes.sectionWrapper}>
          <Typography variant="h4" className={classes.relatedThemesTitle}>
            Related Themes
          </Typography>
          {tagSlugs.map((slug, i) => (
            <Tag
              variant="outlined"
              color="secondary"
              key={`${tags[i]}slug`}
              href={slug}
            >
              {tags[i]}
            </Tag>
          ))}
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
      lessons: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    fields: PropTypes.shape({
      tagSlugs: PropTypes.array,
      slug: PropTypes.string,
    }),
  }),
};

export default Course;
