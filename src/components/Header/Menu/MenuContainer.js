import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {Menu, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useTheme} from '@material-ui/core/styles';

const MenuContainer = ({ menu }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={{fill: theme.palette.common.white}} fontSize="large"/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menu.map(item =>
          <MenuItem onClick={handleClose} key={item.label}>
            <Link to={item.path}> {item.label} </Link>
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

MenuContainer.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    path: PropTypes.string
  })).isRequired
};

export default MenuContainer;
