import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Grid,
  useTheme,
  styled,
  Checkbox,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const ProductsGrid = () => {
  const theme = useTheme();

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

  const StyledGridContainer = styled(Grid)({
    backgroundColor: theme.palette.secondary.main,
    '.MuiGrid-root.MuiGrid-item': {
      paddingTop: 0,
      paddingLeft: 0,
      padding: 8,
    },
    [theme.breakpoints.up('xs')]: {
      paddingInline: 30,
      marginBottom: 10,
      paddingBlock: 10,
    },
    [theme.breakpoints.up('md')]: {
      paddingBlock: 10,
      marginBottom: 25,
    },
  });

  return (
    <StyledGridContainer container maxWidth="90%">
      {itemData.map(({ img, title }) => (
        <Grid item key={uuidv4()} xs={12} md={6} lg={4} xl={3} sx={{ position: 'relative' }}>
          <Box
            src={`${img}?w=164&h=164&fit=crop&auto=format`}
            component="img"
            width="100%"
            alt={title}
            loading="lazy"
          />
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            sx={{
              position: 'absolute', right: 0, top: 0,
            }}
            size="large"
          />
        </Grid>
      ))}
    </StyledGridContainer>
  );
};

export default ProductsGrid;
