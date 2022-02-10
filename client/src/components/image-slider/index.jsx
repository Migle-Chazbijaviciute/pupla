import React from 'react';
import {
  Box,
  Link,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { v4 as uuidv4 } from 'uuid';
import routes from '../../routing/routes';

const ImageSlider = ({ sliderData }) => (
  <Carousel
    indicatorContainerProps={{
      style: {
        marginTop: '40px',
      },
    }}
    interval={3000}
  >
    {
          sliderData.map(({ img, title }) => (
            <Box key={uuidv4()} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link href={routes.ProductPage}>
                <Box
                  component="img"
                  sx={{
                    width: { xs: 300, sm: 400 },
                    height: { xs: 500 },
                    objectFit: 'contain',
                  }}
                  alt={title}
                  src={img}
                />
              </Link>
            </Box>
          ))
        }
  </Carousel>
);

export default ImageSlider;
