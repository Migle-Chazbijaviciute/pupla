import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  styled,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import API from '../services/api-service';
import StyledHeader from '../components/styled-components/main-header';
import ImageSlider from '../components/image-slider';
import StyledInfo from '../components/styled-components/styled-info';
import { Garment } from '../types';

type HandleChange = (event: SelectChangeEvent) => void;

const StyledProductGridContainer = styled(Grid)(({ theme }) => ({
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
}));

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Garment>();

  useEffect(() => {
    (async () => {
      if (id === undefined) { return null; }
      const data = await API.getGarment(id);
      if (typeof data === 'string') { return null; }
      return setItem(data);
    })();
  }, [id]);

  const [size, setSize] = useState('');

  const handleChange: HandleChange = (event) => {
    setSize(event.target.value);
  };

  if (!item) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <StyledProductGridContainer container columnSpacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingRight: { md: 20 },
          }}
        >
          <ImageSlider sliderData={item.images} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledHeader sx={{ textAlign: 'left' }}>{item.label}</StyledHeader>
            <StyledHeader sx={{ textAlign: 'left' }}>
              {item.price}
              €
            </StyledHeader>
            <StyledInfo sx={{ fontSize: '1.05em', mb: 50, mt: 20 }}>Model 1.78m is wearing size M</StyledInfo>
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
      </StyledProductGridContainer>
    </Box>
  );
};

export default ProductPage;
