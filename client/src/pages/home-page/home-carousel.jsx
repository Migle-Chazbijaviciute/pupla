import React from 'react';
import {
  Box,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import StyledHeader from '../../components/styled-components/main-header';
import ImageSlider from '../../components/limited-edition-slider';

const HomeCarousel = () => {
  const theme = useTheme();

  const limited = [
    {
      img: '/static/stock/blackSet1.jpg',
      title: 'limited1',
      price: 50,
    },
    {
      img: 'static/stock/blackSet2.jpg',
      title: 'limited2',
      price: 50,
    },
    {
      img: 'static/stock/redDress1.jpg',
      title: 'limited1',
      price: 50,
    },
    {
      img: 'static/stock/redDress2.jpg',
      title: 'limited2',
      price: 50,
    },
  ];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      background: theme.palette.primary.light,
    }}
    >
      <StyledHeader>limited edition</StyledHeader>
      <ImageSlider sliderData={limited} />
    </Box>
  );
};

export default HomeCarousel;
