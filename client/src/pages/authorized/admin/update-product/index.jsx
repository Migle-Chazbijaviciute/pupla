import React from 'react';
import {
  Box,
} from '@mui/material';
import StyledHeader from '../../../../components/styled-components/main-header';
import UpdateFormComponent from './update-item-form';

const UpdateProduct = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <StyledHeader>update product</StyledHeader>
    <UpdateFormComponent />
  </Box>
);

export default UpdateProduct;
