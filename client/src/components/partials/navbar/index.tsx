import React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Link,
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Favorite from '@mui/icons-material/Favorite';
import ProfilePopover from './profile-popover';
import ToggleMenu from './toggle-menu';
import routes from '../../../routing/routes';

const Navbar: React.FC = () => (
  <Box>
    <AppBar position="static" sx={{ px: 15 }}>
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
          <Link href={routes.HomePage}>
            <Box
              component="img"
              sx={{ height: { xs: 50, md: 64 } }}
              alt="Pupla logo."
              src="/static/images/pupla-logo.jpg"
            />
          </Link>
          <Box sx={{
            width: 80, flexGrow: 0, display: 'flex', justifyContent: 'flex-end',
          }}
          >
            <ProfilePopover />
            <IconButton href={routes.SavedPage} color="secondary" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Favorite />
            </IconButton>
            <IconButton href={routes.BagPage} color="secondary" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <ShoppingBagIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
