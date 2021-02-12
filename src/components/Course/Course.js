import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link} from 'gatsby';
import Tag from '../shared/Tag';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    padding: theme.spacing(2, 0, 6),
  },
  sectionWrapper: {
    display: 'block',
    padding: theme.spacing(4, 0, 4),
  },
  courseCardItem: {
    margin: theme.spacing(3, 0, 3),
  },
  relatedThemesTitle: {
    marginBottom: theme.spacing(4),
  },
}));

const Course = ({course}) => {
  const classes = useStyles();
  const theme = useTheme();
  const {tags, title, description, lessons} = course.frontmatter;
  const {tagSlugs, slug} = course.fields;
  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Button component={Link} to="/courses" role="link">
        Back to Courses
      </Button>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h2" className={classes.sectionTitle}>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
      <List component="ol" disablePadding aria-label="Available courses">
        {lessons.map(({link, title, description}, value) => (
          <ListItem
            disableGutters
            key={title}
            className={classes.sectionWrapper}
          >
            <ListItemText
              primary={
                <Typography variant="h3" className={classes.courseCardItem}>
                  {value + 1}
                  {'. '}
                  {title}
                </Typography>
              }
              secondary={<Typography variant="body1">{description}</Typography>}
            />
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`${slug}${link}`}
              className={classes.courseCardItem}
            >
              Learn {title}
            </Button>
          </ListItem>
        ))}
      </List>
      {tags.length > 2 && (
        <Box className={classes.sectionWrapper} textAlign="center">
          <Typography variant="h4" className={classes.relatedThemesTitle}>
            Related Themes
          </Typography>
          {tagSlugs.map((slug, i) => (
            <Tag
              variant="outlined"
              color="secondary"
              key={`${tags[i]}slug`}
              component={Link}
              to={slug}
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
