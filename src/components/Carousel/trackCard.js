import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import {makeStyles, withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
    minHeight: '160px',
    maxWidth: '260px',
    margin: 'auto',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      minHeight: '140px',
    },
  },
  title: {
    marginBotton: theme.spacing(2),
    fontWeight: 800,
  },
  icon: {
    marginBottom: theme.spacing(4),
    minWidth: '42px',
    minHeight: '42px',
  },
})
);

const TrackCardBox = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      transition: 'background-color .25s',
      backgroundColor: theme.palette.info.dark,
    },
  },
}))(Box);

const TrackCard = ({path, icon, title}) => {
  const classes = useStyles();
  return (
    <TrackCardBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      component="a"
      href={path}
      className={classes.content}
    >
      <SvgIcon viewBox={icon.viewbox} className={classes.icon}>
        <path d={icon.path}/>
      </SvgIcon>
      <Typography variant="h3" className={classes.title}>{title}</Typography>
    </TrackCardBox>
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
