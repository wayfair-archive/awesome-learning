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
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import {Link} from 'gatsby';

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

const Tag = withStyles((theme) => ({
  root: {
    display: 'inline-block',
    textAlign: 'center',
    margin: theme.spacing(0, 2, 2, 0),
    padding: theme.spacing(2),
  },
}))(Button);

const Track = ({track}) => {
  console.log(track);
  const classes = useStyles();
  const theme = useTheme();
  const {tags, title, description, techTalks} = track.frontmatter;
  const {tagSlugs, slug} = track.fields;
  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Button component={Link} to="/tech-talks" role="link">
        Back to Tracks
      </Button>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h2" className={classes.sectionTitle}>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
      <List component="ol" disablePadding aria-label="Available Tech Talks">
        {techTalks.map(({link, title, description}, value) => (
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
              Watch: {title}
            </Button>
          </ListItem>
        ))}
      </List>
      {tags && tags.length > 2 && (
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

Track.propTypes = {
  track: PropTypes.shape({
    frontmatter: PropTypes.shape({
      description: PropTypes.string,
      slug: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      techTalks: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          link: PropTypes.string,
          title: PropTypes.string,
        })
      ),
      title: PropTypes.string,
    }),
    fields: PropTypes.shape({
      tagSlugs: PropTypes.array,
      slug: PropTypes.string,
    }),
  }),
};

export default Track;
