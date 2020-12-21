import React from 'react';
import {
  Box,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import ResponsiveVideo from '../shared/ResponsiveVideo';
import {FAQS, GATHER_A_GROUP_GUIDELINES, LESSON_GUIDE} from './HowToConstants';

const useStyles = makeStyles((theme) => ({
  contentSection: {
    padding: theme.spacing(6, 4, 2),
  },
  sectionTitle: {
    padding: theme.spacing(3, 0, 6),
  },
  paragraphContainer: {
    paddingBottom: theme.spacing(4),
  },
  listContainer: {
    margin: 'auto',
    width: '84%',
  },
}));

const HowTo = () => {
  const classes = useStyles();
  const theme = useTheme();
  const useLargeVideo = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box m="auto" mb={5} maxWidth={theme.breakpoints.values.lg}>
      <Box className={classes.contentSection}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Gathering A Group
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          Awesome Learning is best when run in a group setting. Your group can
          be co-located or remote. Here are some battle-tested ground rules.
        </Typography>
        <List
          component="ol"
          disablePadding
          aria-label="Guidelines for gathering a group"
          className={classes.listContainer}
        >
          {GATHER_A_GROUP_GUIDELINES.map((GUIDELINE, i) => (
            <ListItem key={i}>
              <Typography variant="body1">{GUIDELINE}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box className={classes.contentSection}>
        <Typography variant="h2" className={classes.sectionTitle}>
          Before Your Lesson
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          Each lesson includes a video and reading materials. We strongly
          recommend working through both the videos and the reading materials{' '}
          <b>before</b> your lesson begins. If you are the lesson leader, please
          send out the link to the lesson to your group at least 24 hours in
          advance of when you will gather for the lesson exercises.
        </Typography>
        <List
          component="ol"
          disablePadding
          aria-label="Best practices to preparing for a lesson"
          className={classes.listContainer}
        >
          <ListItem>
            <Typography variant="body1">
              1. <b>Good:</b> Watching the video before the lesson begins.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              2. <b>Better:</b> Watching the video and reading the pre-read
              materials before the lesson begins.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              3. <b>Best:</b> All of the above and taking the pre-read quiz to
              test your understanding.
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Box className={classes.contentSection}>
        <Typography variant="h2" className={classes.sectionTitle}>
          During Your Lesson
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          Check out this short video for an introduction to our exercise
          environment.
        </Typography>
        <Box m="auto" width={useLargeVideo ? '100%' : '80%'}>
          <ResponsiveVideo
            link="https://www.youtube.com/embed/e8_wPD6O3gA"
            title="Introduction to your exercises"
          />
        </Box>
        <Typography
          variant="body1"
          align="center"
          className={classes.paragraphContainer}
        >
          <b>Rough lesson guide</b>
        </Typography>
        <List
          component="ol"
          disablePadding
          aria-label="Lesson guide"
          className={classes.listContainer}
        >
          {LESSON_GUIDE.map((STEP, i) => (
            <ListItem key={i}>
              <Typography variant="body1">{STEP}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box className={classes.contentSection}>
        <Typography variant="h2" className={classes.sectionTitle}>
          <abbr title="Frequently Asked Questions">FAQs</abbr>
        </Typography>
        <List
          component="ul"
          disablePadding
          aria-label="Frequently asked questions"
        >
          {FAQS.map((FAQ, i) => (
            <ListItem disableGutters key={i}>
              <Typography
                variant="body1"
                className={classes.paragraphContainer}
              >
                <b>{FAQ.question}</b>
              </Typography>
              <Typography
                variant="body1"
                className={classes.paragraphContainer}
              >
                {FAQ.answer}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default HowTo;
