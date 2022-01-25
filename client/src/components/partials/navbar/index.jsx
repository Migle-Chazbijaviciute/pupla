import React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, useTheme, styled, Link, Menu, MenuItem,
} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();

  const StyledButton = styled(IconButton)({
    textDecoration: 'none',
    color: theme.palette.primary.light,
  });

  const StyledLink = styled(NavLink)({
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    paddingInline: 5,
    textDecoration: 'none',
    '&.active': {
      textDecoration: 'underline',
    },
  });

  const pages = [
    { title: 'HOME', link: '/' },
    { title: 'PRODUCTS', link: '/products' },
    { title: 'INFORMATION', link: '/information' },
    { title: 'CONTACT US', link: '/contactUs' },
  ];

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <Box sx={{ width: 70, flexGrow: 0 }}>
              <IconButton
                sx={{ display: { md: 'none' } }}
                id="menu-button"
                aria-controls={open ? 'menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="secondary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {pages.map(({ title, link }) => (
                  <MenuItem onClick={handleClose} key={link}>
                    <StyledLink to={link}>{title}</StyledLink>
                  </MenuItem>
                ))}
              </Menu>
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
