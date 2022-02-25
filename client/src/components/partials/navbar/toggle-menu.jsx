import React, { useState, useRef } from 'react';
import {
  Menu,
  MenuItem,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import routes from '../../../routing/routes';
import StyledLink from '../../styled-components/styled-link';

const pages = [
  { title: 'HOME', link: routes.HomePage },
  { title: 'PRODUCTS', link: routes.ProductsPage },
  { title: 'INFORMATION', link: routes.InformationPage },
  { title: 'CONTACT US', link: routes.ContactUsPage },
  { title: 'MY BAG', link: routes.BagPage },
  { title: 'SAVED ITEMS', link: routes.SavedPage },
];

const ToggleMenu = () => {
  const anchorRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

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
          <MenuItem onClick={handleCloseMenu} key={title}>
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
