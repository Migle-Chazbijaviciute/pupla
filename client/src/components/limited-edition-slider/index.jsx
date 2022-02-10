import React from 'react';
import {
  Box,
  Link,
  styled,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useTheme } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';
import routes from '../../routing/routes';

const ImageSlider = ({ sliderData }) => {
  const theme = useTheme();

  const ImagesBox = styled(Box)({
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
  });

  return (
    <ImagesBox>
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
    </ImagesBox>
  );
};

export default ImageSlider;
