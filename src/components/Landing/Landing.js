import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StyledLink from '../shared/StyledLink';
import Block from '../shared/Block';
import Carousel from '../Carousel';
import ContentSection from '../shared/ContentSection';

import './Landing.scss';

const COURSE_DATA_MAPPING = {
  'Accessibility': {
    icon: 'accessibility',
    subTitle: 'Explore Accessibility fundamentals for the web!'
  },
  'Data Types': {
    icon: 'data',
    subTitle: 'Deep dive into types, equality, coercion, immutability and more.'
  },
  'Array Methods': {
    icon: 'array',
    subTitle: 'Learn functional array methods like filter, map, and reduce!'
  },
  Promises: {
    icon: 'async',
    subTitle: 'Learn the Promise API inside and out.'
  },
  Testing: {
    icon: 'testing',
    subTitle:
      'Learn frontend testing with Jest, Enzyme, and React Testing Library.'
  },
  'React Hooks': {
    icon: 'hook',
    subTitle: 'Learn react hooks.'
  },
  'Functions and Scope': {
    icon: 'function',
    subTitle: 'Learn about function and scopes.',
  },
  'CSS Layouts': {
    icon: 'info',
    subTitle: 'Learn about CSS fundamentals on layouts.',
  },
  'SOLID Principles': {
    icon: 'solid',
    subTitle: 'Learn the SOLID Architecture Principles and how to apply them.',
  }
};

const useStyles = makeStyles((theme) => ({
  heroTitle: {
    marginTop: theme.spacing(8),
    fontWeight: 800,
  },
  heroSubtitle: {
    marginTop: theme.spacing(5),
    fontWeight: 800,
  },
  heroCta: {
    marginTop: theme.spacing(4),
    fontWeight: 800,
    color: 'white',
  },
  heroBackground: {
    height: '250px',
    clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0 100%)',
    [theme.breakpoints.up('md')]: {
      height: '280px',
      clipPath: 'polygon(0 0, 100% 0, 100% 56%, 0 100%)',
    },
    [theme.breakpoints.up('lg')]: {
      height: '300px',
      clipPath: 'polygon(0 0, 100% 0, 100% 42%, 0 100%)',
    },
  },
  coursesContainer: {
    marginLeft: '15vw',
    marginRight: '15vw',
  }
}));

const Landing = ({courseEdges}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        className={classes.heroBackground}
        color="white"
        bgcolor={theme.palette.primary.main}
      >
        <Typography variant="h1" color="inherit" className={classes.heroTitle}>Awesome Learning</Typography>
        <Typography variant="body1" className={classes.heroSubtitle}>Learn front-end tech, together.</Typography>
        <Button variant="contained" color="secondary" className={classes.heroCta}>Get started</Button>
      </Box>
      <Box className={classes.coursesContainer}>
        <Typography variant="h2" color="inherit" className={classes.heroTitle}>Popular Courses</Typography>
        <Grid container spacing={3}>
          <p>grid here</p>
        </Grid>
      </Box>


      <div className="Landing-callOut">
        <div className="Landing-courseWrapper">
          <Block mb="20px" is="h3">
            Our Courses:
          </Block>
          <Carousel
            items={courseEdges.map(({node}) => {
              const {id, frontmatter, fields} = node;
              const {title} = frontmatter;
              return {
                id,
                title,
                icon: COURSE_DATA_MAPPING[title]
                  ? COURSE_DATA_MAPPING[title].icon
                  : 'array',
                subTitle: COURSE_DATA_MAPPING[title]
                  ? COURSE_DATA_MAPPING[title].subTitle
                  : title,
                path: fields.slug
              };
            })}
          />
        </div>
      </div>
      <ContentSection
        className="Landing-description"
        title="What's Deliberate Practice?"
        isLight
      >
        <p>
          Deliberate practice involves more than repetition; it requires
          activities that are designed to improve performance, challenge the
          learner, and provide feedback.
        </p>
        <StyledLink
          variation="secondary"
          path="https://pwp.gatech.edu/bmeac/2016/02/18/deliberate-practice-and-why-you-should-do-it/"
          isExternal
        >
          Learn More
        </StyledLink>
      </ContentSection>

      <ContentSection
        className="Landing-description"
        title="How Do We Apply Deliberate Practice?"
        isLight
      >
        <Block is="p" mb="16px">
          Each course and lesson are designed to incrementally challenge the
          learner while providing immediate feedback in the form of quizzes,
          provided solutions, and guiding comments.
        </Block>

        <Block is="p" mb="16px">
          <b>Each course</b> is comprised of multiple lessons that each build on
          learnings from the previous lesson, always challenging the learner to
          reach for new understanding.
        </Block>

        <p>
          <b>Each lesson</b> features exercises designed to incrementally increase
          in complexity to further challenge the user.
        </p>
      </ContentSection>

      <ContentSection
        className="Landing-description"
        title="Group Focused"
        isLight
      >
        <Block is="p" mb="16px">
          We believe one of the major separators between "junior" and "senior"
          developers is technical communication. That's why we strongly suggest
          running these sessions with a small group, either in person or over a
          chat client.
        </Block>
        <p>
          Over the hundreds of sessions we've run, those who tackle these courses
          as a group learn faster and become stronger technical communicators, all
          while building key technical skills.
        </p>
      </ContentSection>

      <ContentSection title="How it Works" isLight>
        <ol className="Landing-list">
          <li className="Landing-listItem">
            <h3>Gather a Team</h3>
            <p className="Landing-listItemText">
              We recommend groups of no more than{' '}
              <StyledLink
                variation="secondary"
                path="https://en.wikipedia.org/wiki/Ringelmann_effect"
                isExternal
              >
                five or six people
              </StyledLink>
              . Try to build groups with relatively similar abilities across
              members to keep everyone interested and engaged.
            </p>
          </li>
          <li className="Landing-listItem">
            <h3>Pick a Course</h3>
            <p className="Landing-listItemText">
              Start with one of our pre-built courses like array methods, testing,
              etc. Later you can use the same learning method with other materials
              and contribute your own course!
            </p>
          </li>
          <li className="Landing-listItem">
            <h3>Pick a Time</h3>
            <p className="Landing-listItemText">
              We recommend setting aside an hour to an hour and a half per
              session, at a cadence of once per week until you complete your
              course.
            </p>
          </li>
          <li className="Landing-listItem">
            <h3>Pick a Place</h3>
            <p className="Landing-listItemText">
              Ideally, each of you has a laptop in a quiet space. Otherwise, find
              the best way to get your group together at the scheduled time
              whether in person or remotely.
            </p>
          </li>
        </ol>
      </ContentSection>

      <ContentSection
        className="Landing-description"
        title="Who is This For?"
        isLight
      >
        <Block is="p" mb="16px">
          This material is currently used by full time software engineers within
          Wayfair. We believe beginners, experts, and everyone in between can
          learn something here.
        </Block>
        <p>
          In general, we find that a group of folks motivated to learn and improve
          both their soft skills and Frontend knowledge will do well here. If
          there are explicit pre-requisites for a course, they will be clearly
          stated.
        </p>
      </ContentSection>
      <ContentSection title="Ready to Get Started?" isLight>
        <Block mb="16px">
          <StyledLink variation="secondary" path="/courses">
            See Our Courses
          </StyledLink>
        </Block>
        <StyledLink variation="secondary" path="/howTo">
          Read the Session How-To Guide
        </StyledLink>
      </ContentSection>
    </>
  );
};

export default Landing;
