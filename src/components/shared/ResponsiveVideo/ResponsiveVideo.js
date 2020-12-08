/*
  Responsive iFrame container to let video embeds fill their parent container
  while maintaining their aspect ratio
 */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    maxWidth: "100%",
    margin: theme.spacing(4),
  },
  responsiveIFrameWrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  videoFrame: {
    border: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  }
})
);

const ResponsiveVideo = ({link, title}) => {
  const classes = useStyles();
  return (
    <Box className={classes.videoContainer}>
      <Box className={classes.responsiveIFrameWrapper}>
        <iframe
          data-testid={link}
          key={link}
          src={link}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={classes.videoFrame}
        />
      </Box>
    </Box>
  );
};

ResponsiveVideo.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default ResponsiveVideo;
