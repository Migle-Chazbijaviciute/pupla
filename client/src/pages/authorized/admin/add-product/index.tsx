import React from 'react';
import {
  Box,
} from '@mui/material';
import StyledHeader from '../../../../components/styled-components/main-header';
import AddItemForm from './add-item-form';

const AddProduct = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <StyledHeader>add product</StyledHeader>
    <AddItemForm />
  </Box>
);

export default AddProduct;
