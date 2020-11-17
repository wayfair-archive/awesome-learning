import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getIcon } from '../../utils';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minWidth: '320px',
  },
  logoButton: {
    '&:hover': {
      backgroundColor: 'initial',
    },
  },
  icon: {
    maxWidth: '20px',
    height: '20px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '28px',
      height: '28px',
    },
  },
  logo: {
    paddingLeft: theme.spacing(3),
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  },
}));

const HeaderButton = withStyles((theme) => ({
  root: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(2),
    },
    borderRadius: 0,
    borderBottom: '2px solid transparent',
    '&:hover': {
      backgroundColor: 'initial',
      borderBottom: `2px solid ${theme.palette.primary.contrastText}`,
    },
  },
}))(Button);

export const PureHeader = ({ data }) => {
  const theme = useTheme();
  const classes = useStyles();
  const logoElement = useMediaQuery(theme.breakpoints.up('md')) ? 'h2' : 'h3';
  const hideMenu = useMediaQuery('(min-width:560px)');
  const iconData = getIcon('logo');
  const { title, menu } = data.site.siteMetadata;
  return (
    <AppBar position="static" className={classes.content}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex">
          <Button color="inherit" href="/" className={classes.logoButton}>
            <SvgIcon viewBox={iconData.viewbox} className={classes.icon}>
              <path d={iconData.path}/>
            </SvgIcon>
            <Typography variant={logoElement} className={classes.logo}>
              {title}
            </Typography>
          </Button>
        </Box>
        {hideMenu
          ? (
            <Box display="flex">
              {menu.map(item =>
                <HeaderButton color="inherit" href={item.path} size="large" key={item.label}>{item.label}</HeaderButton>
              )}
              <HeaderButton color="inherit"
                href="https://github.com/wayfair/awesome-learning"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon />
              </HeaderButton>
            </Box>
          )
          : (<Menu menu={menu}/>)}
      </Toolbar>
    </AppBar>
  );
};

PureHeader.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        menu: PropTypes.arrayOf(PropTypes.shape({
          label: PropTypes.string,
          path: PropTypes.string
        }))
      })
    })
  }).isRequired
};

const Header = props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
            menu {
              label
              path
            }
          }
        }
      }
    `}
    render={data => <PureHeader {...props} data={data} />}
  />
);

export default Header;
