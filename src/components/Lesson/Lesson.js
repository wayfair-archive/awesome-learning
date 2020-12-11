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
  listItem: {
    display: 'block',
  },
  surveyButton: {
    textTransform: 'none',
    verticalAlign: 'top',
    lineHeight: 1.5,
    fontFamily: 'Varela, Arial, sans-serif',
  },
}));

const Lesson = ({lesson, slug}) => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    title,
    description,
    timeToCompletion,
    videoLinks,
    readingLinks,
    preReadQuizLink,
    preReadQuiz,
    course,
    defaultTab,
    secondaryExerciseUrl,
  } = lesson.frontmatter;

  // Split the description into different paragraphs based on new lines
  const descriptionParagraphs = description.split(/\r?\n\n/);
  const path = slug.toLowerCase().split('/courses/')[1];
  const courseName = course.split('-').join(' ');

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Button component={Link} to={`/courses/${course}/`} role="link">
        Back to {courseName}
      </Button>
      <Box className={classes.sectionContainer}>
        <Typography variant="h1" className={classes.sectionTitle}>
          {title}
        </Typography>
        {timeToCompletion && (
          <Typography variant="body1" className={classes.paragraphContainer}>
            <b>Average time to completion = </b>
            {timeToCompletion}
          </Typography>
        )}
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

      {videoLinks && (
        <Box className={classes.sectionContainer}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Pre-Session Video Materials (required)
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            Check out this content before your session begins to get an idea of
            what you will be working on.
          </Typography>
          <Grid container>
            {videoLinks.map((link) => (
              <Grid item xs={12} md={6} key={link}>
                <ResponsiveVideo
                  link={link}
                  title="Pre-Session Video Materials"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {readingLinks && (
        <Box className={classes.sectionContainer}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Pre-Session Reading Materials (optional)
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            We've curated these resources to give you greater depth on these
            subjects. Don't feel like you have to read them all.
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            Taking the time to go through all of these resources will definitely
            put you on the road to expert-level knowledge in this subject
            matter.
          </Typography>
          <List
            component="ul"
            disablePadding
            aria-label="Pre-session reading materials"
          >
            {readingLinks.map((readingLink) => (
              <ListItem
                disableGutters
                key={readingLink.title}
                className={classes.listItem}
              >
                <Button
                  href={readingLink.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  role="link"
                >
                  {readingLink.title}
                </Button>
                <Typography
                  variant="body1"
                  style={{
                    display: 'list-item',
                    listStyle: 'disc inside none',
                  }}
                  className={classes.paragraphContainer}
                >
                  {readingLink.description}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {(preReadQuiz || preReadQuizLink) && (
        <Box className={classes.sectionContainer}>
          <Typography variant="h2" className={classes.sectionTitle}>
            Pre-Session Quiz
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            This pre-read quiz is designed to challenge your knowledge of the
            pre-read material. These quizzes are a great way to check your
            comprehension, and we highly recommend taking them.
          </Typography>
          <Box className={classes.paragraphContainer}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={preReadQuiz ? `${slug}/quiz` : preReadQuizLink}
              rel={preReadQuiz ? '' : 'noopener noreferrer'}
              target={preReadQuiz ? '' : '_blank'}
              role="link"
            >
              Take the Quiz
            </Button>
          </Box>
        </Box>
      )}

      <Box className={classes.sectionContainer}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Exercises
        </Typography>
        <Box className={classes.paragraphContainer}>
          {secondaryExerciseUrl ? (
            <PrimitiveLessonButton
              path={secondaryExerciseUrl}
              lessonData={lesson}
            >
              Start the Workshop
            </PrimitiveLessonButton>
          ) : (
            <LessonButton
              defaultTab={defaultTab}
              path={path}
              lessonData={lesson}
            />
          )}
        </Box>
      </Box>

      <Box className={classes.sectionContainer}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Let Us Know How We Did
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          We need as much feedback as possible to make this platform more
          effective for you and others like you. Please take a moment to fill
          out{' '}
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiB_M1YmwwwG9BNhGnd1Nn_BhnzOfHFUDrZGz1PAvm8A1NxA/viewform"
            rel="noopener noreferrer"
            target="_blank"
            role="link"
            className={classes.surveyButton}
          >
            this session survey
          </Button>
          .
        </Typography>
      </Box>
    </Box>
  );
};

Lesson.propTypes = {
  lesson: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      timeToCompletion: PropTypes.node,
      videoLinks: PropTypes.array,
      readingLinks: PropTypes.array,
      preReadQuizLink: PropTypes.string,
      preReadQuiz: PropTypes.any,
      course: PropTypes.string,
      defaultTab: PropTypes.string,
      secondaryExerciseUrl: PropTypes.string,
    }),
  }).isRequired,
  slug: PropTypes.string.isRequired,
};

export default Lesson;
