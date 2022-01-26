import React from 'react';
import {
  Box,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import HomeHero from './home-hero';
import HomeCarousel from './home-carousel';

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.palette.primary.light,
    }}
    >
      <HomeHero />
      <HomeCarousel />
    </Box>
  );
};
export default HomePage;
