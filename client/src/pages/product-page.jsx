import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  useTheme,
  styled,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from '@mui/material';
import API from '../services/api-service';
import StyledHeader from '../components/styled-components/main-header';
import ImageSlider from '../components/image-slider';

const ProductPage = () => {
  const theme = useTheme();
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await API.getGarment(id);
      setItem(data);
    })();
  }, [id]);

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

  const [size, setSize] = useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  if (!item) return null;

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
          <ImageSlider sliderData={item.images} width="100%" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledHeader fontSize="2rem" textAlign="left">{item.label}</StyledHeader>
            <StyledHeader fontSize="1.5rem" textAlign="left">
              {item.price}
              €
            </StyledHeader>
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
                {
                item.sizes.map((x) => (
                  <MenuItem key={x.id} value={x.title}>{x.title}</MenuItem>
                ))
                }
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
