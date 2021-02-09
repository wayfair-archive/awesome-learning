import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Grid, Button, Box, List, ListItem} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link} from 'gatsby';
import ResponsiveVideo from '../shared/ResponsiveVideo';
import LessonButton, {PrimitiveLessonButton} from '../LessonButton';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    padding: theme.spacing(3, 0, 6),
  },
  sectionContainer: {
    paddingBottom: theme.spacing(8),
  },
  paragraphContainer: {
    paddingBottom: theme.spacing(4),
  },
  surveyButton: {
    textTransform: 'none',
    verticalAlign: 'top',
    lineHeight: 1.5,
    fontFamily: 'Varela, Arial, sans-serif',
  },
}));

const TechTalk = ({techTalk}) => {
  const classes = useStyles();
  const theme = useTheme();

  // Split the description into different paragraphs based on new lines
  const descriptionParagraphs = techTalk.frontmatter.description.split(
    /\r?\n\n/
  );
  const trackName = techTalk.frontmatter.track.split('-').join(' ');

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Button
        component={Link}
        to={`/tech-talks/${techTalk.frontmatter.track}/`}
        role="link"
      >
        Back to {trackName}
      </Button>
      <Box className={classes.sectionContainer}>
        <Typography variant="h1" className={classes.sectionTitle}>
          {techTalk.frontmatter.title}
        </Typography>
        {descriptionParagraphs.map((paragraph, key) => (
          <Typography
            variant="body1"
            key={key}
            className={classes.paragraphContainer}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>

      <Box className={classes.sectionContainer}>
        <Grid container>
          <Grid item xs={12}>
            <ResponsiveVideo
              link={techTalk.frontmatter.embedLink}
              title="Watch the Tech Talk"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export const techTalkPropType = PropTypes.shape({
  description: PropTypes.string,
  embedLink: PropTypes.string,
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      twitter: PropTypes.string,
    })
  ),
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
});

TechTalk.propTypes = {
  slug: PropTypes.string.isRequired,
  techTalk: PropTypes.shape({
    frontmatter: techTalkPropType,
  }).isRequired,
};

export default TechTalk;
