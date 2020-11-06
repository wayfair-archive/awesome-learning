import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CodeIcon from '@material-ui/icons/Code';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// const COURSE_DATA_MAPPING = {
//   'Accessibility': {
//     icon: 'accessibility',
//     subTitle: 'Explore Accessibility fundamentals for the web!'
//   },
//   'Data Types': {
//     icon: 'data',
//     subTitle: 'Deep dive into types, equality, coercion, immutability and more.'
//   },
//   'Array Methods': {
//     icon: 'array',
//     subTitle: 'Learn functional array methods like filter, map, and reduce!'
//   },
//   Promises: {
//     icon: 'async',
//     subTitle: 'Learn the Promise API inside and out.'
//   },
//   Testing: {
//     icon: 'testing',
//     subTitle:
//       'Learn frontend testing with Jest, Enzyme, and React Testing Library.'
//   },
//   'React Hooks': {
//     icon: 'hook',
//     subTitle: 'Learn react hooks.'
//   },
//   'Functions and Scope': {
//     icon: 'function',
//     subTitle: 'Learn about function and scopes.',
//   },
//   'CSS Layouts': {
//     icon: 'info',
//     subTitle: 'Learn about CSS fundamentals on layouts.',
//   },
//   'SOLID Principles': {
//     icon: 'solid',
//     subTitle: 'Learn the SOLID Architecture Principles and how to apply them.',
//   }
// };

const footerData = [
  {
    icon: PeopleIcon,
    title: 'Make a team',
    subtitle: 'of 5-6 peers'
  },
  {
    icon: MenuBookIcon,
    title: 'Pick a course',
    subtitle: 'for your team'
  },
  {
    icon: AccessTimeIcon,
    title: 'Find a time',
    subtitle: 'and place'
  },
  {
    icon: CodeIcon,
    title: 'Start coding',
    subtitle: 'and enjoy!'
  },
];

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
  popularCourseTitle: {
    paddingBottom: theme.spacing(2),
    fontWeight: 800,
  },
  sectionTitle: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    fontWeight: 800,
  },
  sectionContainer: {
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '5vw',
      paddingRight: '5vw',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '15vw',
      paddingRight: '15vw',
    },
    paddingBottom: theme.spacing(8),
  },
  getStartedTitle: {
    fontWeight: 800,
  },
  getStartedGrid: {
    width: '90%',
    margin: 'auto',
  },
  getStartedIcon: {
    height: '2.5em',
    width: '2.5em',
    marginBottom: theme.spacing(2),
  },
  getStartedCTA: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(3),
  }
}));

const Landing = () => {
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
      <Box className={classes.sectionContainer}>
        <Typography variant="h2" color="inherit" className={classes.popularCourseTitle}>Popular Courses</Typography>
      </Box>
      <Box className={classes.sectionContainer}>
        <Typography variant="h2" color="inherit" className={classes.sectionTitle}>What is Awesome Learning?</Typography>
        <Typography variant="body1" color="inherit">
          Awesome Learning is a front-end-web focused learning platform created by current and former members of Wayfair
          Engineering. Small groups of like-minded engineers gather together in a room or virtually, typically once a
          week, and run through Awesome Learning lessons. Learning materials and pre-read quizzes are done before
          starting the lesson, so everyone is on the same page and held accountable
        </Typography>
      </Box>
      <Box
        className={classes.sectionContainer}
        color="white"
        bgcolor={theme.palette.secondary.main}
      >
        <Typography variant="h2" color="inherit" className={classes.sectionTitle}>How can I get started?</Typography>
        <Grid container spacing={3} className={classes.getStartedGrid}>
          {footerData.map(item =>
            <Grid item xs={12} sm={3}>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <item.icon className={classes.getStartedIcon}/>
                <Typography variant="body1" color="inherit" className={classes.getStartedTitle}>{item.title}</Typography>
                <Typography variant="body1" color="inherit">{item.subtitle}</Typography>
              </Box>
            </Grid>
          )}
        </Grid>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          className={classes.getStartedCTA}
        >
          <Button variant="contained" color="primary">Get started</Button>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
