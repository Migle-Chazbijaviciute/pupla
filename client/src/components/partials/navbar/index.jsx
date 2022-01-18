import React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, useTheme, styled,
} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Navbar = () => {
  const theme = useTheme();

  const StyledButton = styled(IconButton)({
    textDecoration: 'none',
    color: theme.palette.primary.light,
  });

  return (
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
            <Box sx={{ width: 80, flexGrow: 0 }} />
            <Box
              component="img"
              sx={{
                height: 64,
              }}
              alt="Pupla logo."
              src="/static/images/pupla-logo.jpg"
            />
            <Box sx={{
              width: 80, flexGrow: 0, display: 'flex', justifyContent: 'flex-end',
            }}
            >
              <StyledButton href="/profile">
                <PermIdentityIcon />
              </StyledButton>
              <StyledButton href="/cart">
                <ShoppingBagIcon />
              </StyledButton>
            </Box>
          </Box>
        </Toolbar>
        <Box />
      </AppBar>
    </Box>
  );
};

export default Navbar;
