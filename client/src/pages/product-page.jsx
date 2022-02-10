import React from 'react';
import {
  Box, Typography, useTheme, styled, Grid, InputLabel, MenuItem, FormControl, Select, Button,
} from '@mui/material';
import StyledHeader from '../components/styled-components/main-header';
import ImageSlider from '../components/limited-edition-slider';

const ProductPage = () => {
  const theme = useTheme();

  const images = [
    {
      img: '/static/stock/blackSet1.jpg',
      title: 'limited1',
      price: 50,
    },
    {
      img: '/static/stock/blackSet2.jpg',
      title: 'limited2',
      price: 50,
    },
  ];

  const StyledInfo = styled(Typography)({
    color: theme.palette.primary.dark,
    fontSize: '1.05rem',
    marginBottom: 90,
    marginTop: 20,
  });

  const StyledGridContainer = styled(Grid)({
    [theme.breakpoints.up('xs')]: {
      paddingInline: 35,
      marginBlock: 40,
    },
    [theme.breakpoints.up('sm')]: {
      width: 600,
      paddingInline: 45,
      marginBlock: 40,
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      direction: 'row',
      paddingInline: 55,
      marginBlock: 40,
    },
    [theme.breakpoints.up('lg')]: {
      width: 1200,
      direction: 'row',
      paddingInline: 55,
      marginBlock: 40,
    },
  });

  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <StyledGridContainer container columnSpacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingRight: { md: 20 },
          }}
        >
          <ImageSlider sliderData={images} width="100%" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledHeader fontSize="2rem" textAlign="left">{images[0].title}</StyledHeader>
            <StyledHeader fontSize="1.5rem" textAlign="left">250 €</StyledHeader>
            <StyledInfo>Model 1.78m is wearing size M</StyledInfo>
            <FormControl fullWidth sx={{ mt: 12, mb: 10, width: { md: 300 } }}>
              <InputLabel id="size">Size</InputLabel>
              <Select
                labelId="size"
                id="size-select"
                value={size}
                label="Size"
                onChange={handleChange}
              >
                <MenuItem value="s">S (EU-36)</MenuItem>
                <MenuItem value="m">M (EU-38)</MenuItem>
                <MenuItem value="l">L (EU-40)</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="secondary" fullWidth sx={{ display: 'block', mb: 5, width: { md: 300 } }}>Add to Cart</Button>
          </Box>
        </Grid>
      </StyledGridContainer>
    </Box>
  );
};

export default ProductPage;
