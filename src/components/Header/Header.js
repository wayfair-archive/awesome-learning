import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import './Header.scss';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getIcon } from '../../utils';
import Icon from '../shared/Icon';
import Menu from './Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  logo: {
    justifyContent: "left",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  tab: {
    marginRight: theme.spacing(3),
  },
  titleContainer: {
    flexGrow: 1,
  },
}));

export const PureHeader = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();
  const hideMenu = useMediaQuery(theme.breakpoints.up('sm'));
  const { title, menu } = data.site.siteMetadata;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.content}>
        <Toolbar>
          <Button color="inherit" href="/" className={classes.titleContainer}>
            <Typography variant="h6" className={classes.logo}>
              {title}
            </Typography>
          </Button>
          {hideMenu
            ? (
              <>
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
              </>
            )
            : (<Menu menu={menu} className={classes.menuButton}/>)}
        </Toolbar>
      </AppBar>
    </div>
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

{/* <header className="Header"> */}
{/*  <Link to="/" className="Header-logo"> */}
{/*    <Icon */}
{/*      icon={getIcon('logo')} */}
{/*      cssClasses="Header-icon Header-icon--logo" */}
{/*    /> */}
{/*    <h1 className="Header-title">{title}</h1> */}
{/*  </Link> */}
{/*  <nav className="Header-nav"> */}
{/*    <div className="Header-menu Header-menu--icon"> */}
{/*      <Menu menu={menu} /> */}
{/*    </div> */}
{/*    <ul className="Header-list"> */}
{/*      {menu.map(item => ( */}
{/*        <li key={item.label} className="Header-menu"> */}
{/*          <Link className="Header-link" to={item.path}> */}
{/*            {item.label} */}
{/*          </Link> */}
{/*        </li> */}
{/*      ))} */}
{/*      <li className="Header-menu"> */}
{/*        <a */}
{/*          href="https://github.com/wayfair/awesome-learning" */}
{/*          className="Header-link" */}
{/*          rel="noopener noreferrer" */}
{/*          target="_blank" */}
{/*        > */}
{/*          <Icon icon={getIcon('github')} /> */}
{/*        </a> */}
{/*      </li> */}
{/*    </ul> */}
{/*  </nav> */}
{/* </header> */}
