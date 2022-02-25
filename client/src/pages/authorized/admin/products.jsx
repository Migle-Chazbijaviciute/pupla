import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';

const columns = [
  { field: 'id', headerName: 'ID', width: 220 },
  { field: 'label', headerName: 'Name', width: 170 },
  { field: 'categoryTitle', headerName: 'Category', width: 100 },
  { field: 'colorTitle', headerName: 'Color', width: 100 },
  {
    field: 'price', headerName: 'Price', type: 'number', width: 100,
  },
];

const Products = ({ data, ...props }) => {
  const rows = data.map(({
    id, price, label, color, category,
  }) => ({
    id,
    price,
    label,
    colorTitle: color.title,
    categoryTitle: category.title,
  }));

  return (
    <Box sx={{
      display: { xs: 'block', sm: 'flex' },
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      ...props,
    }}
    >
      <StyledHeader>products</StyledHeader>
      <Box style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableMultipleSelection
        />
      </Box>
      <Button variant="contained" fullWidth>DELETE SELECTED PRODUCTS</Button>
      <Button variant="contained" fullWidth sx={{ my: 5 }} href="/add-product">ADD NEW PRODUCT</Button>
    </Box>
  );
};

export default Products;
