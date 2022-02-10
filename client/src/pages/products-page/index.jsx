import React from 'react';
import {
  Box,
  useTheme,
  styled,
} from '@mui/material';
import ProductsDrawer from './products-drawer';
import ProductsGrid from './products-grid';
import ProductsSort from './products-sort';
import StyledHeader from '../../components/styled-components/main-header';

const ProductsPage = () => {
  const theme = useTheme();

  const StyledActions = styled(Box)({
    backgroundColor: theme.palette.secondary.main,
    width: '90%',
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    paddingInline: 38,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <StyledHeader>products</StyledHeader>
      <StyledActions>
        <Box>
          <ProductsSort />
        </Box>
        <Box>
          <ProductsDrawer />
        </Box>
      </StyledActions>
      <ProductsGrid />
    </Box>
  );
};

export default ProductsPage;
