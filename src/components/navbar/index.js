import React, {useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import "./navbar.scss";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


export default ({open}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    open()
  };

    return (
        <header className='header'>
            <div className="header__menu" onClick={handleOpen}>
                <MenuIcon/>
            </div>

            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <span className="header__name">User</span>
              <AccountCircle style={{color: '#fff'}}/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </header>
    );
}
