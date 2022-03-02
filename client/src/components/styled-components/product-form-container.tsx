import React, { FormEventHandler } from 'react';
import {
  Container,
  Box,
} from '@mui/material';

type ProductFormContainerProps = {
  onSubmit: FormEventHandler<HTMLFormElement>,
  isValid: boolean,
  loading: boolean,
};

const ProductFormContainer: React.FC<ProductFormContainerProps> = ({
  children,
  onSubmit,
  isValid,
  loading,
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
