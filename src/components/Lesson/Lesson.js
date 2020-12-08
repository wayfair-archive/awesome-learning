import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
  linkTitle: {
    textTransform: 'uppercase',
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.secondary.dark,
      textDecoration: 'none',
    },
  }
})
);

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
    secondaryExerciseUrl
  } = lesson.frontmatter;

  // Split the description into different paragraphs based on new lines
  const descriptionParagraphs = description.split(/\r?\n\n/);
  const path = slug.toLowerCase().split('/courses/')[1];
  const courseName = course.split('-').join(' ');

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Typography variant="h4" color="secondary" component="a" href={`/courses/${course}/`} className={classes.linkTitle}>Back to {courseName}</Typography>
      <Box className={classes.sectionContainer}>
        <Typography variant="h1" className={classes.sectionTitle}>{title}</Typography>
        {timeToCompletion && (
          <Typography variant="body1" className={classes.paragraphContainer}><b>Average time to completion ={' '}</b>{timeToCompletion}</Typography>
        )}
        {descriptionParagraphs.map((paragraph, key) => (
          <Typography variant="body1" key={key} className={classes.paragraphContainer}>{paragraph}</Typography>
        ))}
      </Box>

      <Box className={classes.sectionContainer}>
        <Typography variant="h1" className={classes.sectionTitle}>Pre-Session Video Materials (required)</Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          Check out this content before your session begins to get an idea of
          what you will be working on.
        </Typography>
        <Grid container>
          {videoLinks && videoLinks.map(link => (
            <Grid item xs={12} md={6} key={link}>
              <ResponsiveVideo link={link} title="Pre-Session Video Materials"/>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className={classes.sectionContainer}>
        <Typography variant="h1" className={classes.sectionTitle}>Pre-Session Reading Materials (optional)</Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          We've curated these resources to give you greater depth on these
          subjects. Don't feel like you have to read them all.
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          Taking the time to go through all of these resources will definitely
          put you on the road to expert-level knowledge in this subject
          matter.
        </Typography>
        {readingLinks.map(readingLink => (
          <Fragment key={readingLink.title}>
            <Typography
              color="secondary"
              variant="h4"
              component="a"
              href={readingLink.link}
              rel="noopener noreferrer"
              target="_blank"
              className={classes.linkTitle}
            >
              {readingLink.title}
            </Typography>
            <Typography variant="body1" className={classes.paragraphContainer}>&#8226;{' '}{readingLink.description}</Typography>
          </Fragment>
        ))}
      </Box>

      {(preReadQuiz || preReadQuizLink) && (
        <Box className={classes.sectionContainer}>
          <Typography variant="h1" className={classes.sectionTitle}>Pre-Session Quiz</Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            This pre-read quiz is designed to challenge your knowledge of the
            pre-read material. These quizzes are a great way to check your
            comprehension, and we highly recommend taking them.
          </Typography>
          <Button variant="contained" color="primary" href={preReadQuiz !== null ? `${slug}/quiz` : preReadQuizLink}>Take the Quiz</Button>
        </Box>
      )}

      <Box className={classes.sectionContainer}>
        <Typography variant="h1" className={classes.sectionTitle}>Exercises</Typography>
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
      secondaryExerciseUrl: PropTypes.string
    })
  }).isRequired,
  slug: PropTypes.string.isRequired
};

export default Lesson;
