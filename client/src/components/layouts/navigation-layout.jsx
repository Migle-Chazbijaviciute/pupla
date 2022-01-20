import React from 'react';
import {
  Box,
  useTheme,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';
import Navigation from '../partials/navigation';

const NavigationLayout = () => {
  const theme = useTheme();

  const vh = `calc(100vh - ${theme.mixins.toolbar.minHeight}px - ${theme.mixins.footer.height}px - ${theme.mixins.navigation.minHeight}px)`;

  return (
    <Box>
      <Navbar />
      <Navigation />
      <Box component="main" minHeight={vh}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
export default NavigationLayout;
