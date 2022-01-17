import React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, useTheme, styled, Divider,
} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();

  const StyledButton = styled(IconButton)({
    textDecoration: 'none',
    color: theme.palette.primary.light,
  });

  const StyledFont = styled(NavLink)({
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    paddingInline: 25,
    textDecoration: 'none',
    '&.active': {
      textDecoration: 'underline',
    },
  });

  return (
    <Box>
      <AppBar position="static" sx={{ px: 12 }}>
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
      <Box sx={{
        minWidth: '100%',
        minHeight: theme.mixins.toolbar.minHeight,
        display: 'inline-flex',
        background: theme.palette.primary.light,
        justifyContent: 'center',
        alignItems: 'center',
        px: 12,
      }}
      >
        <StyledFont to="/"> home</StyledFont>
        <StyledFont to="/products"> products</StyledFont>
        <StyledFont to="/information"> information</StyledFont>
        <StyledFont to="/contactUs"> contact us</StyledFont>
      </Box>
      <Divider orientation="horizontal" color={theme.palette.secondary.main} />
    </Box>
  );
};

export default Navbar;
