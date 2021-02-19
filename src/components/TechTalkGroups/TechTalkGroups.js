import React, {useState} from 'react';
import {Box, Typography, Button} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link} from 'gatsby';
import {Pagination} from '@material-ui/lab';
import PropTypes from 'prop-types';
import {techTalkPropType} from '../TechTalk';

const ITEMS_PER_PAGE = 4;

const useStyles = makeStyles((theme) => ({
  backToContainer: {
    marginBottom: theme.spacing(4),
  },
  title: {
    width: 'fit-content',
    margin: theme.spacing(1, 0, 2),
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

const TechTalkGroups = ({techTalkGroups}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const noOfPages = Math.ceil(techTalkGroups.length / ITEMS_PER_PAGE);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Typography variant="h1" color="textPrimary">
        Tech Talk Groups
      </Typography>
      {techTalkGroups
        .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
        .map((techTalkGroup) => (
          <Box
            display="flex"
            flexDirection="column"
            key={techTalkGroup.frontmatter.title}
            className={classes.courseContainer}
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
          count={noOfPages}
          page={page}
          onChange={handleChange}
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
  techTalkGroups: PropTypes.arrayOf(techTalkPropType),
};

export default TechTalkGroups;
