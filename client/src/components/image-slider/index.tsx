import React from 'react';
import {
  Box,
  // Link,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const ImageSlider = ({ sliderData }) => {
  if (sliderData === undefined) return null;
  // const { images } = sliderData[0];
  // console.log(images);
  // const [{ itemId, images }] = sliderData;
  // console.log('id', itemId);
  // console.log('images', images);

  // console.log(sliderData[0].images);

  // const x = sliderData[0].itemId;
  // console.log(x);

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
          // eslint-disable-next-line no-shadow
          sliderData.map(({ id, src }) => (
            <Box key={id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* <Link href={`/product/${itemId}`}> */}
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
              {/* </Link> */}
            </Box>
          ))
        }
    </Carousel>
  );
};
export default ImageSlider;
