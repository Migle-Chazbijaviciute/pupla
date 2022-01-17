import React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, useTheme,
} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { styled } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();

  const StyledButton = styled(IconButton)({
    textDecoration: 'none',
    color: theme.palette.primary.light,
  });

  return (
    <Box>
      <AppBar position="static" sx={{ height: 70 }}>
        <Toolbar
          container
          direction="row"
          justifyContent="space-around"
          // sx={{
          //   display: 'grid',
          // }}
        >
          <Box
            component="img"
            sx={{
              height: 64,
            }}
            alt="Pupla logo."
            src="/static/images/pupla-logo.jpg"
          />
          <StyledButton>
            <PermIdentityIcon />
          </StyledButton>
          <StyledButton>
            <ShoppingBagIcon />
          </StyledButton>
        </Toolbar>
        <Box />
      </AppBar>
    </Box>
  );
};

export default Navbar;
