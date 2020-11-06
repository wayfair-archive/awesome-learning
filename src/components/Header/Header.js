import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
  root: {
    justifyContent: 'space-between',
    minWidth: '350px',
  },
  icon: {
    paddingRight: theme.spacing(2),
    minWidth: '38px',
  },
  logo: {
    fontWeight: 800,
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tab: {
    fontWeight: 800,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(2),
    },
  },
}));

export const PureHeader = ({ data }) => {
  const theme = useTheme();
  const classes = useStyles();
  const logoSize = useMediaQuery(theme.breakpoints.up('md')) ? 'h2' : 'h3';
  const hideMenu = useMediaQuery('(min-width:560px)');
  const iconData = getIcon('logo');
  const { title, menu } = data.site.siteMetadata;
  return (
    <AppBar position="static" className={classes.content}>
      <Toolbar className={classes.root}>
        <Box display="flex">
          <Button color="inherit" href="/">
            <SvgIcon viewBox={iconData.viewbox} className={classes.icon}>
              <path d={iconData.path}/>
            </SvgIcon>
            <Typography variant={logoSize} className={classes.logo}>
              {title}
            </Typography>
          </Button>
        </Box>
        {hideMenu
          ? (
            <Box display="flex">
              {menu.map(item =>
                <Button color="inherit" href={item.path} size="large" className={classes.tab} key={item.label}>{item.label}</Button>
              )}
              <Button color="inherit"
                href="https://github.com/wayfair/awesome-learning"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon />
              </Button>
            </Box>
          )
          : (<Menu menu={menu} className={classes.menuButton}/>)}
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

export const Header = props => (
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
