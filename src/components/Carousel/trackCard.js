import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import {makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    marginTop: theme.spacing(6),
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

const TrackCard = ({path, icon, title}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      color="white"
      bgcolor={theme.palette.info.main}
      component="a"
      href={path}
      className={classes.content}
    >
      <SvgIcon viewBox={icon.viewbox} className={classes.icon}>
        <path d={icon.path}/>
      </SvgIcon>
      <Typography variant="h3" className={classes.title}>{title}</Typography>
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
