import React from 'react';
import {
  Box,
} from '@mui/material';
import StyledHeader from '../../../../components/styled-components/main-header';
import ProductDescription from './product-description';

const AddProduct = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <StyledHeader>add product</StyledHeader>
    <ProductDescription />
  </Box>
);

export default AddProduct;
