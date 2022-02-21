import React, { useState, useEffect } from 'react';
import {
  Box,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import HomeHero from './home-hero';
import HomeCarousel from './home-carousel';
import API from '../../services/api-service';

const HomePage = () => {
  const [limitedImages, setLimitedImages] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    (async () => {
      const fetchedData = await API.getLimitedGarmentsImages();
      setLimitedImages(...fetchedData);
    })();
  }, []);

  if (!limitedImages) return null;

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
      <HomeCarousel limitedImages={limitedImages} />
    </Box>
  );
};
export default HomePage;
