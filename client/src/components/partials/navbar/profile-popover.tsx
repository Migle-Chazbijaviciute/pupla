/* eslint-disable no-nested-ternary */
import React, { useState, useRef } from 'react';
import {
  Menu,
  MenuItem,
  IconButton,
  Box,
  Typography,
  IconButtonProps,
  useTheme,
} from '@mui/material';
import { useSelector } from 'react-redux';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import routes from '../../../routing/routes';
import AuthService from '../../../services/auth-service';
import { authSelector } from '../../../store/auth';
import StyledLink from '../../styled-components/styled-link';

const ProfilePopover: React.FC = () => {
  const theme = useTheme();
  const auth = useSelector(authSelector);
  const anchorRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu: IconButtonProps['onClick'] = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    handleCloseMenu();
    AuthService.logout();
  };

  return (
    <Box>
      <IconButton onClick={handleOpenMenu} ref={anchorRef} color="secondary">
        <PermIdentityIcon />
      </IconButton>
      {auth.loggedIn
        ? (
          auth.user?.role === 'USER'
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
                  <Typography sx={{ color: theme.palette.primary.dark }} textAlign="center">LOGOUT</Typography>
                </MenuItem>
              </Menu>
            ) : (
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
                  <StyledLink to={routes.AdminPage}>
                    <Typography textAlign="center">DASHBOARD</Typography>
                  </StyledLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                  <StyledLink to={routes.ProfilePage}>
                    <Typography textAlign="center">PROFILE</Typography>
                  </StyledLink>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography sx={{ color: theme.palette.primary.dark }} textAlign="center">LOGOUT</Typography>
                </MenuItem>
              </Menu>
            ))
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
