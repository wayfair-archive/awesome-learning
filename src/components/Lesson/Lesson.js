import React from 'react';
import PropTypes from 'prop-types';
// import StyledLink from '../shared/StyledLink';
// import Block from '../shared/Block';
// import LessonButton, {PrimitiveLessonButton} from '../LessonButton';
// import ContentSection from '../shared/ContentSection';
import Box from '@material-ui/core/Box';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';

// import './lesson.scss';

const useStyles = makeStyles((theme) => ({
  backToCourseButton: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(0, 0, 2),
    borderRadius: 0,
    '&:hover': {
      backgroundColor: 'initial',
      textDecoration: 'underline',
    },
  },
  sectionTitle: {
    textDecoration: 'underline',
    paddingBottom: theme.spacing(5),
  },
  timeToCompletion: {
    paddingBottom: theme.spacing(5),
  },
  paragraphContainer: {
    paddingBottom: theme.spacing(4),
  },
  videoContainer: {

  },
  responsiveVideoFrameWrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  videoFrame: {
    border: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },


})
);

const Lesson = ({lesson,}) => {
  const classes = useStyles();
  const theme = useTheme();

  const {
    title,
    description,
    timeToCompletion,
    videoLinks,
    // readingLinks,
    // preReadQuizLink,
    // preReadQuiz,
    course,
    // defaultTab,
    // secondaryExerciseUrl
  } = lesson.frontmatter;
  //
  // // Split the description into different paragraphs based on new lines
  const descriptionParagraphs = description.split(/\r?\n\n/);
  // const path = slug.toLowerCase().split('/courses/')[1];
  const courseName = course.split('-').join(' ');

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Button color="secondary" size="large" href={`/courses/${course}/`} className={classes.backToCourseButton}>Back to {courseName}</Button>
      <Typography variant="h1" className={classes.sectionTitle}>{title}</Typography>
      {timeToCompletion && (
        <Typography variation="body1" className={classes.timeToCompletion}><Box display="inline" fontWeight="fontWeightBold">Average time to completion ={' '}</Box>{timeToCompletion}</Typography>
      )}
      {descriptionParagraphs.map((paragraph, key) => (
        <Typography variation="body1" key={key} className={classes.paragraphContainer}>{paragraph}</Typography>
      ))}

      <Typography variant="h1" className={classes.sectionTitle}>Pre-Session Video Materials (required)</Typography>
      <Typography variation="body1" className={classes.paragraphContainer}>
        Check out this content before your session begins to get an idea of
        what you will be working on.
      </Typography>

      {videoLinks && videoLinks.map(link => (
        <Box className={classes.videoContainer}>
          <Box className={classes.responsiveVideoFrameWrapper}>
            <iframe
              data-testid={link}
              key={link}
              src={link}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className={classes.videoFrame}
            />
          </Box>
        </Box>
      ))}




      <Typography variant="h1" className={classes.sectionTitle}>Pre-Session Reading Materials (optional)</Typography>

      <Typography variant="h1" className={classes.sectionTitle}>Pre-Session Quiz</Typography>

      <Typography variant="h1" className={classes.sectionTitle}>Exercises</Typography>

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

/*
    <div className="Lesson">
      <ContentSection
        title=" "
        subTitle="Pre-Session Learning Materials (required)"
      >
        <Block is="p" mb="16px">
          Check out this content before your session begins to get an idea of
          what you will be working on.
        </Block>
        {videoLinks &&
          videoLinks.map(link => (
            <iframe
              data-testid={link}
              key={link}
              width="100%"
              height="315"
              src={link}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ))}
      </ContentSection>

      {readingLinks && (
        <ContentSection title=" " subTitle="Pre-read Materials">
          <Block is="p" mb="16px">
            We've curated these resources to give you greater depth on these
            subjects. Don't feel like you have to read them all.
          </Block>
          <Block is="p" mb="16px">
            Taking the time to go through all of these resources will definitely
            put you on the road to expert-level knowledge in this subject
            matter.
          </Block>
          <ul className="Lesson-readingList">
            {readingLinks.map(readingLink => (
              <li className="Lesson-readingListItem" key={readingLink.title}>
                <StyledLink
                  isExternal
                  variation="tertiary"
                  path={readingLink.link}
                >
                  {readingLink.title}
                </StyledLink>
                <p>- {readingLink.description}</p>
              </li>
            ))}
          </ul>
        </ContentSection>
      )}
      {(preReadQuiz || preReadQuizLink) && (
        <ContentSection title=" " subTitle="Pre-read Quiz">
          <Block is="p" mb="16px">
            This pre-read quiz is designed to challenge your knowledge of the
            pre-read material. These quizzes are a great way to check your
            comprehension, and we highly recommend taking them.
          </Block>
          <StyledLink
            path={preReadQuiz !== null ? `${slug}/quiz` : preReadQuizLink}
            isExternal={preReadQuiz === null}
            variation="tertiary"
            lessonData={lesson}
          >
            Quiz Link
          </StyledLink>
        </ContentSection>
      )}

      <ContentSection title=" " subTitle="Exercises">
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
      </ContentSection>

      <ContentSection title=" " subTitle="Session Feedback">
        <Block is="p" mb="16px">
          We need as much feedback as possible to make this platform more
          effective for you and others like you. Please take a moment to fill
          out this session survey.
        </Block>
        <StyledLink
          isExternal
          path="https://docs.google.com/forms/d/e/1FAIpQLSeiB_M1YmwwwG9BNhGnd1Nn_BhnzOfHFUDrZGz1PAvm8A1NxA/viewform"
          variation="tertiary"
        >
          Survey Link
        </StyledLink>
      </ContentSection>
    </div>
 */
