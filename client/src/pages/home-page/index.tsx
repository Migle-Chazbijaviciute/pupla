import React, { useState, useEffect } from 'react';
import {
  Box,
  styled,
} from '@mui/material';
import HomeHero from './home-hero';
import HomeCarousel from './home-carousel';
import API from '../../services/api-service';
import { Image } from '../../types';

export const StyledMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.primary.light,
}));

const HomePage: React.FC = () => {
  const [limitedImages, setLimitedImages] = useState<Image[]>([]);
  useEffect(() => {
    (async () => {
      const fetchedData = await API.getLimitedGarmentsImages();
      if (typeof fetchedData !== 'string') {
        setLimitedImages(fetchedData);
      }
    })();
  }, []);

  if (limitedImages === undefined) return null;
  return (
    <StyledMainBox>
      <HomeHero />
      <HomeCarousel limitedImages={limitedImages} />
    </StyledMainBox>
  );
};
export default HomePage;
