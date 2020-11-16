import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Carousel from '../Carousel';
import {GET_STARTED_LINK, COURSE_DATA_MAPPING, FOOTER_DATA} from './LandingConstants';

const useStyles = makeStyles((theme) => ({
  // Hero Styles
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

  // Section Content and Wrapper Styles
  sectionTitle: {
    paddingBottom: theme.spacing(6),
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
    paddingBottom: theme.spacing(13),
  },
  sectionContent: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
  },

  // Get Started Section Styles
  getStartedSectionTitle: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    fontWeight: 800,
  },
  getStartedItemTitle: {
    fontWeight: 800,
    [theme.breakpoints.down('xs')]: {
      fontSize: "20px",
    },
  },
  getStartedItemSubtitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "20px",
    },
  },
  getStartedGrid: {
    width: '90%',
    margin: 'auto',
  },
  getStartedIcon: {
    height: '84px',
    width: '84px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: '55px',
      width: '55px',
    },
  },
  getStartedCTA: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(3),
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
      > <Typography variant="h1" color="inherit" className={classes.heroTitle}>Awesome Learning</Typography>

        <Typography variant="body1" className={classes.heroSubtitle}>Learn front-end tech, together.</Typography>
        <Button variant="contained" color="secondary" className={classes.heroCta} href={GET_STARTED_LINK}>Get started</Button>
      </Box>
      <Box className={classes.sectionContainer}>
        <Box className={classes.sectionContent}>
          <Typography variant="h2" color="inherit" className={classes.sectionTitle}>Popular Courses</Typography>
          <Carousel
            items={courseEdges.map(({node}) => {
              const {frontmatter, fields} = node;
              const {title} = frontmatter;
              return {
                title,
                icon: COURSE_DATA_MAPPING[title]
                  ? COURSE_DATA_MAPPING[title].icon
                  : 'array',
                path: fields.slug
              };
            })}
          />
        </Box>
      </Box>
      <Box className={classes.sectionContainer}>
        <Box className={classes.sectionContent}>
          <Typography variant="h2" color="inherit" className={classes.sectionTitle}>What is Awesome Learning?</Typography>
          <Typography variant="body1" color="inherit">
            Awesome Learning is a front-end-web focused learning platform created by current and former members of Wayfair
            Engineering. Small groups of like-minded engineers gather together in a room or virtually, typically once a
            week, and run through Awesome Learning lessons. Learning materials and pre-read quizzes are done before
            starting the lesson, so everyone is on the same page and held accountable
          </Typography>
        </Box>
      </Box>
      <Box
        className={classes.sectionContainer}
        color="white"
        bgcolor={theme.palette.secondary.main}
      >
        <Box className={classes.sectionContent}>
          <Typography variant="h2" color="inherit" className={classes.getStartedSectionTitle}>How can I get started?</Typography>
          <Grid container spacing={3} className={classes.getStartedGrid}>
            {FOOTER_DATA.map(item =>
              <Grid item xs={12} sm={3} key={item.title}>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                >
                  <item.icon className={classes.getStartedIcon}/>
                  <Typography variant="body1" color="inherit" align="center" className={classes.getStartedItemTitle}>{item.title}</Typography>
                  <Typography variant="body1" color="inherit" align="center" className={classes.getStartedItemSubtitle}>{item.subtitle}</Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          className={classes.getStartedCTA}
        >
          <Button variant="contained" color="primary" href={GET_STARTED_LINK}>Get started</Button>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
