import { AppBar, Avatar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import EuroIcon from '@mui/icons-material/Euro';
import InfoIcon from '@mui/icons-material/Info';
import CollectionsIcon from '@mui/icons-material/Collections';
import { useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AccountCircleOutlined } from '@mui/icons-material';
import HelpIcon from '@mui/icons-material/Help';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function AppLayout({children}) {
   
  const drawerWidth = 140;
  let navigate = useNavigate();
  const [pageTitle, setpageTitle] = useState('Muay Thai Club');
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }
  
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <div>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{flexGrow:1, marginRight: 150}}
          >
            {pageTitle}
          </Typography>
          <Tooltip title="Open settings">
            <IconButton
              sx={{ p: 0 }}
              onClick={handleMenu} 
            >
              <Avatar alt="Remy Sharp" src={require('../images/Cafe-Owners.png')} />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={() => navigate('/SignUp')}>Sign Up</MenuItem>
            <MenuItem onClick={() => navigate('/SignIn')}>Sign In</MenuItem>
            <MenuItem onClick={() => navigate('/ContactUs')}>Contact Us</MenuItem>
            <MenuItem onClick={() => navigate('/AboutUs')}>Log out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        anchor="left"
      >
      <Toolbar />
      <Divider />
      <List>
        <ListItem  
        disablePadding
        >
          <ListItemButton onClick={ () => {navigate('/AboutUs'); setpageTitle('About Us')}}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={'About Us'} />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding>
          <ListItemButton onClick={ () => {navigate('/Gallery'); setpageTitle('Gallery')}}>
            <ListItemIcon>
              <CollectionsIcon />
            </ListItemIcon>
            <ListItemText primary={'Gallery'} />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem  disablePadding>
          <ListItemButton onClick={ () => {navigate('/Schedule'); setpageTitle('Schedule')}}>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary={'Schedule'} />
          </ListItemButton>
        </ListItem>

        <Divider />

          <ListItem  disablePadding>
            <ListItemButton onClick={ () => {navigate('/Pricing'); setpageTitle('Pricing')}}>
              <ListItemIcon>
                <EuroIcon />
              </ListItemIcon>
              <ListItemText primary={'Pricing'} />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem  disablePadding>
            <ListItemButton onClick={ () => {navigate('/Shop'); setpageTitle('Shop')}}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary={'Shop'} />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem  disablePadding>
            <ListItemButton onClick={ () => {navigate('/FAQ'); setpageTitle('FAQ')}}>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary={'FAQ'} />
            </ListItemButton>
          </ListItem>

        </List>
         
      </Drawer>
      </div>
      <div className='class.page'>
      {children}
      </div>
    </div>
  )
}