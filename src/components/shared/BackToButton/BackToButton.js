import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const StyledTypography = withStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.secondary.dark,
      textDecoration: 'none',
    },
  },
}))(Typography);

const BackToButton = ({href, children}) => (
  <StyledTypography
    variant="h4"
    color="textSecondary"
    component="a"
    href={href}
  >
    {children}
  </StyledTypography>
);

BackToButton.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default BackToButton;
