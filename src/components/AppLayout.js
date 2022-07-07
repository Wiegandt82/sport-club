import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
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
  const handleMenu = () => {
  }
  
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
          
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                
                color="inherit"
              >
                <AccountCircleOutlined />
              </IconButton>

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
            <ListItemButton onClick={ () => {navigate('/AboutUs'); setpageTitle('AboutUs')}}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={'AboutUs'} />
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