import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box, SvgIcon} from '@material-ui/core';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import {Link} from 'gatsby';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
  },
  svg: {
    width: '40px',
    height: '100%',
  },
}));

const TrackCardBox = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minHeight: '160px',
    maxWidth: '260px',
    margin: 'auto',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    transition: `background-color ${theme.transitions.duration.short}`,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
      minHeight: '140px',
    },
  },
}))(Box);

const TrackCard = ({path, icon, title}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <TrackCardBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color={theme.palette.primary.contrastText}
      component={Link}
      to={path}
      role="link"
    >
      <SvgIcon viewBox={icon.viewBox} className={classes.svg}>
        <path d={icon.path} />
      </SvgIcon>
      <Typography variant="body1" className={classes.title}>
        {title}
      </Typography>
    </TrackCardBox>
  );
};

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
};

TrackCard.defaultProps = {
  path: '/',
};

export default TrackCard;
