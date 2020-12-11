import React from 'react';
import {Link} from 'gatsby';
import {Typography, Box, Button, Grid} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Carousel from '../Carousel';
import {
  GET_STARTED_LINK,
  COURSE_DATA_MAPPING,
  FOOTER_DATA,
} from './LandingConstants';

const useStyles = makeStyles((theme) => ({
  // Hero Styles
  heroTitle: {
    marginTop: theme.spacing(8),
  },
  heroSubtitle: {
    marginTop: theme.spacing(5),
  },
  heroCta: {
    marginTop: theme.spacing(4),
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
  },
  sectionContainer: {
    padding: theme.spacing(0, 9, 13),
  },
  sectionContent: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
  },

  // Get Started Section Styles
  getStartedSectionTitle: {
    padding: theme.spacing(8, 0, 4),
  },
  getStartedItemTitle: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.25rem',
    },
  },
  getStartedItemSubtitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.25px',
    },
  },
  getStartedGrid: {
    width: '90%',
    margin: 'auto',
  },
  getStartedIcon: {
    marginBottom: theme.spacing(2),
    height: '84px',
    width: '84px',
    [theme.breakpoints.up('sm')]: {
      height: '55px',
      width: '55px',
    },
  },
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
        color={theme.palette.primary.contrastText}
        bgcolor={theme.palette.primary.main}
      >
        <Typography variant="h1" className={classes.heroTitle}>
          Awesome Learning
        </Typography>
        <Typography variant="body1" className={classes.heroSubtitle}>
          Learn front-end tech, together.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          className={classes.heroCta}
          to={GET_STARTED_LINK}
        >
          Get started
        </Button>
      </Box>
      <Box className={classes.sectionContainer}>
        <Box className={classes.sectionContent}>
          <Typography
            variant="h2"
            color="inherit"
            className={classes.sectionTitle}
          >
            Popular Courses
          </Typography>
          <Carousel
            items={courseEdges.map(({node}) => {
              const {frontmatter, fields} = node;
              const {title} = frontmatter;
              return {
                title,
                icon: COURSE_DATA_MAPPING[title]
                  ? COURSE_DATA_MAPPING[title].icon
                  : 'array',
                path: fields.slug,
              };
            })}
          />
        </Box>
      </Box>
      <Box className={classes.sectionContainer}>
        <Box className={classes.sectionContent}>
          <Typography
            variant="h2"
            color="inherit"
            className={classes.sectionTitle}
          >
            What is Awesome Learning?
          </Typography>
          <Typography variant="body1" color="inherit">
            Awesome Learning is a front-end-web focused learning platform
            created by current and former members of Wayfair Engineering. Small
            groups of like-minded engineers gather together in a room or
            virtually, typically once a week, and run through Awesome Learning
            lessons. Learning materials and pre-read quizzes are done before
            starting the lesson, so everyone is on the same page and held
            accountable
          </Typography>
        </Box>
      </Box>
      <Box
        className={classes.sectionContainer}
        color={theme.palette.primary.contrastText}
        bgcolor={theme.palette.secondary.main}
      >
        <Box className={classes.sectionContent}>
          <Typography
            variant="h2"
            color="inherit"
            className={classes.getStartedSectionTitle}
          >
            How can I get started?
          </Typography>
          <Grid container spacing={3} className={classes.getStartedGrid}>
            {FOOTER_DATA.map((item) => (
              <Grid item xs={12} sm={3} key={item.title}>
                <Box display="flex" alignItems="center" flexDirection="column">
                  <item.icon className={classes.getStartedIcon} />
                  <Typography
                    variant="body1"
                    color="inherit"
                    align="center"
                    className={classes.getStartedItemTitle}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="inherit"
                    align="center"
                    className={classes.getStartedItemSubtitle}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          pt={6}
          pb={3}
        >
          <Button
            component={Link}
            variant="contained"
            color="primary"
            to={GET_STARTED_LINK}
          >
            Get started
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
