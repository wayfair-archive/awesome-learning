import React, {Fragment} from 'react';
import {
  Box,
  Button,
  Grid,
  Link as MaterialLink,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link as GatsbyLink} from 'gatsby';
import PropTypes from 'prop-types';
import ResponsiveVideo from '../shared/ResponsiveVideo';
import Tag from '../shared/Tag';

const useStyles = makeStyles((theme) => ({
  dateTitle: {
    fontWeight: 'bold',
    paddingBottom: theme.spacing(4),
  },
  paragraphContainer: {
    paddingBottom: theme.spacing(4),
  },
  relatedThemesTitle: {
    paddingBottom: theme.spacing(4),
  },
  sectionContainer: {
    paddingBottom: theme.spacing(4),
  },
  sectionTitle: {
    padding: theme.spacing(3, 0, 6),
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
      <Button
        component={GatsbyLink}
        to={`/tech-talks/${techTalk.frontmatter.group}/`}
        role="link"
      >
        Back to {techTalk.frontmatter.group.split('-').join(' ')}
      </Button>
      <Box className={classes.sectionContainer}>
        <Typography variant="h1" className={classes.sectionTitle}>
          {techTalk.frontmatter.title}
        </Typography>
        <Typography
          className={classes.dateTitle}
          component="strong"
          variant="body1"
        >
          Presented on {techTalk.frontmatter.date}
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

      <Box className={classes.sectionContainer}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Speakers
        </Typography>

        <List>
          {techTalk.frontmatter.speakers.map((speaker) => (
            <Typography
              className={classes.paragraphContainer}
              component={ListItem}
              key={speaker.name}
              variant="body1"
            >
              {speaker.name}
              {speaker.title ? `, ${speaker.title}` : null}
              {speaker.twitter ? (
                <Fragment>
                  {' '}
                  <MaterialLink
                    href={`https://twitter.com/${speaker.twitter}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    (Twitter)
                  </MaterialLink>
                </Fragment>
              ) : null}
            </Typography>
          ))}
        </List>
      </Box>

      {techTalk.frontmatter.slides && (
        <Box className={classes.sectionContainer}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Resources
          </Typography>
          <List
            component="ul"
            disablePadding
            aria-label="Resources"
          >
            <ListItem disableGutters key={techTalk.frontmatter.slides}>
              <Typography
                variant="body1"
                style={{
                  display: 'list-item',
                  listStyle: 'disc inside none',
                }}
                className={classes.paragraphContainer}
              >
                <Button
                  href={techTalk.frontmatter.slides}
                  rel="noopener noreferrer"
                  target="_blank"
                  role="link"
                  style={{
                    textTransform: 'none',
                  }}
                >
                  Slides
                </Button>
              </Typography>
            </ListItem>
          </List>
        </Box>
      )}

      {techTalk.frontmatter.tags.length > 2 && (
        <Box className={classes.sectionWrapper} textAlign="left">
          <Typography className={classes.relatedThemesTitle} variant="h2">
            Related Themes
          </Typography>
          {techTalk.fields.tagSlugs.map((slug, i) => (
            <Tag
              variant="outlined"
              color="secondary"
              key={`${techTalk.fields.tagSlugs[i]}slug`}
              component={GatsbyLink}
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
  date: PropTypes.string,
  description: PropTypes.string,
  embedLink: PropTypes.string,
  group: PropTypes.string,
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      twitter: PropTypes.string,
    })
  ),
  slides: PropTypes.string,
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
