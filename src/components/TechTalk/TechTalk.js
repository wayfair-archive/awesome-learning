import React, {Fragment} from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import ResponsiveVideo from '../shared/ResponsiveVideo';
import Tag from '../shared/Tag';

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

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
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
        <Typography variant="h2" className={classes.sectionTitle}>
          Speakers
        </Typography>
        <ul>
          {techTalk.frontmatter.speakers.map((speaker) => (
            <Typography
              className={classes.paragraphContainer}
              component="li"
              key={speaker.name}
              variant="body1"
            >
              {speaker.name}
              {speaker.title ? `, ${speaker.title}` : null}
              {speaker.twitter ? (
                <Fragment>
                  {' '}
                  <a
                    href={`https://twitter.com/${speaker.twitter}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    (Twitter)
                  </a>
                </Fragment>
              ) : null}
            </Typography>
          ))}
        </ul>
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

      {techTalk.frontmatter.tags.length > 2 && (
        <Box className={classes.sectionWrapper} textAlign="center">
          <Typography variant="h4" className={classes.relatedThemesTitle}>
            Related Themes
          </Typography>
          {techTalk.fields.tagSlugs.map((slug, i) => (
            <Tag
              variant="outlined"
              color="secondary"
              key={`${techTalk.fields.tagSlugs[i]}slug`}
              component={Link}
              to={slug}
            >
              {techTalk.frontmatter.tags[i]}
            </Tag>
          ))}
        </Box>
      )}
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
  techTalk: PropTypes.shape({
    fields: PropTypes.shape({
      tagSlugs: PropTypes.arrayOf(PropTypes.string),
    }),
    frontmatter: techTalkPropType,
  }).isRequired,
};

export default TechTalk;
