import React from 'react';
import {
  Box,
  Grid,
  styled,
  useTheme,
  Button,
} from '@mui/material';
import StyledHeader from '../../../components/styled-components/main-header';
import ProductDescription from './product-description';

const AddProduct = () => {
  const theme = useTheme();

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <StyledHeader>add product</StyledHeader>
      <StyledGridContainer container>
        <Grid item xs={12} md={4}>
          <ProductDescription />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box fullWidth sx={{ height: 600, backgroundColor: 'red' }}>
            Nuotraukos
          </Box>
        </Grid>
        <Button variant="contained" fullWidth>ADD NEW PRODUCT NOW</Button>
      </StyledGridContainer>
    </Box>
  );
};

export default AddProduct;
