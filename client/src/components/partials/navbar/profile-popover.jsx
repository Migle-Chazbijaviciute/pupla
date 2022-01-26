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
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const ProfilePopover = () => {
  const theme = useTheme();
  const anchorRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  const userPages = [
    { title: 'PROFILE', link: '/profile' },
    { title: 'LOGIN', link: '/login' },
    { title: 'REGISTER', link: '/register' },
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
      <IconButton onClick={handleOpenMenu} ref={anchorRef} color="secondary">
        <PermIdentityIcon />
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
        {userPages.map(({ title, link }) => (
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

export default ProfilePopover;
