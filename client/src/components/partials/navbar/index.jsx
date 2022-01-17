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
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              minWidth: '60%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 64,
              }}
              alt="Pupla logo."
              src="/static/images/pupla-logo.jpg"
            />
            <Box>
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
