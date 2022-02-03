import React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Link,
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Favorite from '@mui/icons-material/Favorite';
import ProfilePopover from './profile-popover';
import ToggleMenu from './toggle-menu';

const Navbar = () => (
  <Box>
    <AppBar position="static" sx={{ px: 12 }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 1 / 1,
          }}
        >
          <Box sx={{ width: 70, flexGrow: 0 }}>
            <ToggleMenu />
          </Box>
          <Link href="/">
            <Box
              component="img"
              sx={{
                height: 64,
              }}
              alt="Pupla logo."
              src="/static/images/pupla-logo.jpg"
            />
          </Link>
          <Box sx={{
            width: 80, flexGrow: 0, display: 'flex', justifyContent: 'flex-end',
          }}
          >
            <ProfilePopover />
            <IconButton href="/saved" color="secondary">
              <Favorite />
            </IconButton>
            <IconButton href="/bag" color="secondary">
              <ShoppingBagIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
