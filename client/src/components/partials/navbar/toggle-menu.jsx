import React, { useState, useRef } from 'react';
import {
  Menu,
  MenuItem,
  IconButton,
  Box,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const ToggleMenu = () => {
  const theme = useTheme();
  const anchorRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  const pages = [
    { title: 'HOME', link: '/' },
    { title: 'PRODUCTS', link: '/products' },
    { title: 'INFORMATION', link: '/information' },
    { title: 'CONTACT US', link: '/contactUs' },
  ];

  const StyledLink = styled(NavLink)({
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    paddingInline: 5,
    textDecoration: 'none',
    '&.active': {
      textDecoration: 'underline',
    },
  });

  return (
    <Box>
      <IconButton
        onClick={handleOpenMenu}
        ref={anchorRef}
        color="secondary"
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        open={menuOpen}
        onClose={handleCloseMenu}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        {pages.map(({ title, link }) => (
          <MenuItem onClick={handleCloseMenu} key={link}>
            <StyledLink to={link}>
              <Typography textAlign="center">{title}</Typography>
            </StyledLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ToggleMenu;
