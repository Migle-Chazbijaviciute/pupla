import React from 'react';
import {
  Box,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Image } from '../../types';

export type SliderProps = {
  sliderData: Image[]
};

const ImageSlider: React.FC<SliderProps> = ({ sliderData }) => {
  if (sliderData === undefined) return null;

  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          marginTop: '40px',
        },
      }}
      interval={3000}
    >
      {
        sliderData.map(({ id, src }) => (
          <Box key={id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              component="img"
              sx={{
                width: { xs: 300, sm: 400 },
                height: { xs: 500 },
                objectFit: 'contain',
              }}
              alt={src}
              src={src}
            />
          </Box>
        ))
      }
    </Carousel>
  );
};
export default ImageSlider;
