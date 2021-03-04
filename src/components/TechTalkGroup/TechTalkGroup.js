import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link} from 'gatsby';
import {techTalkPropType} from '../TechTalk';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    padding: theme.spacing(2, 0, 6),
  },
  sectionWrapper: {
    display: 'block',
    padding: theme.spacing(4, 0, 4),
  },
  techTalkCardItem: {
    margin: theme.spacing(3, 0, 3),
  },
  relatedThemesTitle: {
    marginBottom: theme.spacing(4),
  },
}));

const TechTalkGroup = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Button component={Link} to="/tech-talks" role="link">
        Back to Tech Talk Groups
      </Button>
      <Box className={classes.sectionWrapper}>
        <Typography variant="h1" className={classes.sectionTitle}>
          {props.techTalkGroup.title}
        </Typography>
        <Typography variant="body1">
          {props.techTalkGroup.description}
        </Typography>
      </Box>
      <List component="ol" disablePadding aria-label="Available courses">
        {props.techTalks.map(({frontmatter: techTalk}, index) => {
          const truncatedDescription =
            techTalk.description.length > 500
              ? `${techTalk.description.substring(0, 500)}...`
              : techTalk.description;
          return (
            <ListItem
              disableGutters
              key={techTalk.title}
              className={classes.sectionWrapper}
            >
              <ListItemText
                primary={
                  <Fragment>
                    <Typography
                      variant="h3"
                      className={classes.techTalkCardItem}
                    >
                      {index + 1}
                      {'. '}
                      {techTalk.title}
                    </Typography>
                  </Fragment>
                }
                secondary={
                  <Typography variant="body1">
                    {truncatedDescription}
                  </Typography>
                }
              />
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={techTalk.slug}
                className={classes.techTalkCardItem}
              >
                Watch "{techTalk.title}"
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export const techTalkGroupPropType = PropTypes.shape({
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

TechTalkGroup.propTypes = {
  techTalks: PropTypes.arrayOf(techTalkPropType).isRequired,
  techTalkGroup: techTalkGroupPropType.isRequired,
};

export default TechTalkGroup;
