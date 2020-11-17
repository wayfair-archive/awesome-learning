import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
    minHeight: '160px',
    maxWidth: '260px',
    margin: 'auto',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
      minHeight: '140px',
    },
  },
  title: {
    marginTop: theme.spacing(3),
  },
  svg: {
    width: '40px',
    height: '100%',
    color: theme.palette.info.contrastText,
  },
  outerCard: {
    padding: theme.spacing(0, 2, 0),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 4, 0),
    },
  }
})
);

const TrackCardBox = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.main,
    transition: `background-color ${theme.transitions.duration.short}`,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
  },
}))(Box);

const TrackCard = ({path, icon, title}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box className={classes.outerCard}>
      <TrackCardBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color={theme.palette.info.contrastText}
        component="a"
        href={path}
        className={classes.content}
      >
        <SvgIcon viewBox={icon.viewBox} className={classes.svg}>
          <path d={icon.path} />
        </SvgIcon>
        <Typography variant="body1" className={classes.title}>{title}</Typography>
      </TrackCardBox>
    </Box>
  );
};

TrackCard.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string
};

TrackCard.defaultProps = {
  path: "/"
};

export default TrackCard;
