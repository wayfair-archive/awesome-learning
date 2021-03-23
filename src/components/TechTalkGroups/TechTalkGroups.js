import React from 'react';
import {
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
  Tooltip,
} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link} from 'gatsby';
import {Pagination} from '@material-ui/lab';
import PropTypes from 'prop-types';
import {techTalkPropType} from '../TechTalk';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  avatarText: {
    color: theme.palette.primary.contrastText,
  },
  backToContainer: {
    marginBottom: theme.spacing(4),
  },
  title: {
    width: 'fit-content',
    margin: theme.spacing(1, 3, 0, 0),
    textDecoration: 'underline',
    textTransform: 'none',
    '&:hover, &:focus': {
      textDecoration: 'none',
    },
  },
  courseContainer: {
    margin: theme.spacing(5, 0, 14),
  },
  goLearnCTA: {
    width: '160px',
    marginTop: theme.spacing(4),
  },
}));

const TechTalkGroups = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Typography variant="h1" color="textPrimary">
        Tech Talk Groups
      </Typography>
      {props.techTalkGroups.map((techTalkGroup) => (
        <Box
          display="flex"
          flexDirection="column"
          key={techTalkGroup.frontmatter.id}
          className={classes.courseContainer}
        >
          <Box
            display="flex"
            alignContent="center"
            marginBottom={2}
          >
            <Typography
              variant="h2"
              component={Link}
              color="primary"
              to={techTalkGroup.fields.slug}
              className={classes.title}
            >
              {techTalkGroup.frontmatter.title}
            </Typography>
            {techTalkGroup.isPrivateTalk && (
              <Tooltip
                title={theme.privateBadge.ariaLabel}
                aria-label={theme.privateBadge.ariaLabel}
              >
                <Chip
                  avatar={
                    <Avatar className={classes.avatar}>
                      <span className={classes.avatarText}>
                        {theme.privateBadge.avatarText}
                      </span>
                    </Avatar>
                  }
                  label={theme.privateBadge.badgeText}
                  variant="outlined"
                />
              </Tooltip>
            )}
          </Box>
          <Typography variant="body1">
            {techTalkGroup.frontmatter.description}
          </Typography>
          <Button
            color="primary"
            component={Link}
            className={classes.goLearnCTA}
            to={techTalkGroup.fields.slug}
            variant="contained"
          >
            Browse Talks
          </Button>
        </Box>
      ))}
      <Box display="flex" justifyContent="center">
        <Pagination
          count={props.numberOfPages}
          page={props.currentPage}
          onChange={props.handlePaginate}
          defaultPage={1}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </Box>
    </Box>
  );
};

TechTalkGroups.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePaginate: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  techTalkGroups: PropTypes.arrayOf(techTalkPropType).isRequired,
};

export default TechTalkGroups;
