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
  },
  icon: {
    paddingRight: theme.spacing(2),
    minWidth: '38px',
  },
  content: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tab: {
    marginRight: theme.spacing(3),
  },
}));

export const PureHeader = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();
  const hideMenu = useMediaQuery(theme.breakpoints.up('sm'));
  const iconData = getIcon('logo');
  const { title, menu } = data.site.siteMetadata;
  return (
    <AppBar position="static" className={classes.content}>
      <Toolbar className={classes.root}>
        <Box display="flex">
          <Button color="inherit" href="/" className={classes.titleContainer}>
            <SvgIcon viewBox={iconData.viewbox} className={classes.icon}>
              <path d={iconData.path}/>
            </SvgIcon>
            <Typography variant="h6" className={classes.logo}>
              {title}
            </Typography>
          </Button>
        </Box>
        {hideMenu
          ? (
            <Box display="flex">
              {menu.map(item =>
                <div className={classes.tab}>
                  <Button color="inherit" href={item.path}>{item.label}</Button>
                </div>)}
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
