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
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import routes from '../../../routing/routes';
import AuthService from '../../../services/auth-service';
import { authSelector } from '../../../store/auth';

const ProfilePopover = () => {
  const auth = useSelector(authSelector);
  const theme = useTheme();
  const anchorRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    handleCloseMenu();
    AuthService.logout();
  };

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
      {auth.loggedIn
        ? (
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
            <MenuItem onClick={handleCloseMenu}>
              <StyledLink to={routes.ProfilePage}>
                <Typography textAlign="center">PROFILE</Typography>
              </StyledLink>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">LOGOUT</Typography>
            </MenuItem>
          </Menu>
        )
        : (
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
            <MenuItem onClick={handleCloseMenu}>
              <StyledLink to={routes.LoginPage}>
                <Typography textAlign="center">LOGIN</Typography>
              </StyledLink>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <StyledLink to={routes.RegisterPage}>
                <Typography textAlign="center">REGISTER</Typography>
              </StyledLink>
            </MenuItem>
          </Menu>
        )}
    </Box>
  );
};

export default ProfilePopover;
