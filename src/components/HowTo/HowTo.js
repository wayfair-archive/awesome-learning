import React from 'react';
import {Box, Typography, useMediaQuery} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import ResponsiveVideo from '../shared/ResponsiveVideo';

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
    width: '80%',
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
        <Box m="auto" width="80%">
          <Typography variant="body1" className={classes.paragraphContainer}>
            1. Limit the group size to a maximum of 6. Anything more can limit
            individual participation.
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            2. Strive to find a group of roughly similar skill levels. This
            isn't an exact science, but mixing highly experienced and
            in-experienced folks together can sometimes lead to being too bored
            or too challenged on a subject.
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            3. Set a time commitment early, and get buy-in. Shoot for an hour a
            week meeting with a consistent time and location.
          </Typography>
        </Box>
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
        <Box m="auto" width="80%">
          <Typography variant="body1" className={classes.paragraphContainer}>
            1. <b>Good:</b> Watching the video before the lesson begins.
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            2. <b>Better:</b> Watching the video and reading the pre-read
            materials before the lesson begins.
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            3. <b>Best:</b> All of the above and taking the pre-read quiz to
            test your understanding.
          </Typography>
        </Box>
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
        <Box m="auto" width="80%">
          <Typography variant="body1" className={classes.paragraphContainer}>
            <b>Rough lesson guide</b>
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            1. Go over any questions the group has based on the pre-work
            materials.
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            2. Open and fork the exercise sets.
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            3. Read through all exercise descriptions and prompts out loud.
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            4. Group program the exercises! Pass the keyboard for each exercise,
            discuss problems and solutions, etc. Above all, communicate!
          </Typography>
          <Typography variant="body1" className={classes.paragraphContainer}>
            5. Check the provided solutions if you get stuck, and don't be
            afraid to get derailed with discussions and research.
          </Typography>
        </Box>
      </Box>

      <Box className={classes.contentSection}>
        <Typography variant="h2" className={classes.sectionTitle}>
          <abbr title="Frequently Asked Questions">FAQs</abbr>
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          <b>Why should I Awesome Learn?</b>
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          Everyone in this industry deals with imposter syndrome. Technologies
          keep advancing while we feel like we're falling behind. Saying it out
          loud is the first step, changing it is the hard step.
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          <b>Who can Awesome Learn?</b>
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          Anyone at any level is welcome to start a group or jump in solo. We
          strongly believe learning can be done without an "expert" in the room.
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          <b>How does Awesome Learning work?</b>
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          Anyone can form a team. Once you gather a team, the team selects the
          "course" they want to learn first. Each course has pre-built hour-long
          lessons with learning materials and coding exercises included. We
          provide completed solutions and learning annotations to make sure you
          never get stuck.
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          <b>What will this do for my team?</b>
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          Awesome learning is a research-backed learning platform designed to
          help small teams build lasting, foundational skills. The platform is a
          series of videos, reading materials, and exercises in one hour
          intervals divided into subject-matter "courses". Reading quizzes keep
          learners engaged, surveys keep leaders up to date with how well team
          members are learning. TDD exercises provide a tight feedback loop.
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          <b>What is a Lesson?</b>
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          An Awesome Learning lesson is a series of videos, pre-reads, and
          exercises designed to teach you a specific subject matter within the
          scope of the course.
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          <b>What is a Course?</b>
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          An Awesome Learning course is a collection of lessons grouped under an
          umbrella theme. The specific goal of each lesson is to help you build
          a better mental model of the broader topic.
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          <b>How long is the time commitment for a single Course?</b>
        </Typography>
        <Typography variant="body1" className={classes.paragraphContainer}>
          It varies. Some of our courses contain 2 lessons, others contain 5.
          The recommended cadence is one lesson or per week. We don't reccommend
          a slower cadence than once per week. Our experience shows folks lose
          too much course context when more than a week passes in between
          lessons.
        </Typography>
      </Box>
    </Box>
  );
};

export default HowTo;
