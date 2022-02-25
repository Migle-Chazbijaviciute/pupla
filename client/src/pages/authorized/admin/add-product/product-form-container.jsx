import React from 'react';
import {
  Container,
  Box,
} from '@mui/material';

const ProductFormContainer = ({
  children,
  onSubmit,
}) => (
  <Container
    component="main"
  >
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mx: { xs: 20, sm: 'auto' },
      }}
      >
        {children}
      </Box>
    </Box>
  </Container>
);

export default ProductFormContainer;
