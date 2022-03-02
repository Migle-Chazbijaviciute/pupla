import React from 'react';
import {
  Box,
  styled,
} from '@mui/material';
import StyledHeader from '../../components/styled-components/main-header';
import ImageSlider from '../../components/image-slider';
import { Image } from '../../types';

const ImagesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexDirection: 'column',
  background: theme.palette.secondary.main,
  marginTop: 20,
  marginBottom: 20,
  [theme.breakpoints.up('xs')]: {
    height: 600,
    width: '90%',
  },
  [theme.breakpoints.up('sm')]: {
    height: 750,
    width: '80%',
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));

const MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  background: theme.palette.primary.light,
}));

type HomeCarouselProps = {
  limitedImages: Image[]
};

const HomeCarousel: React.FC<HomeCarouselProps> = ({ limitedImages }) => (
  <MainBox>
    <StyledHeader>limited edition</StyledHeader>
    <ImagesBox>
      <ImageSlider sliderData={limitedImages} />
    </ImagesBox>
  </MainBox>
);

export default HomeCarousel;
