import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'color', headerName: 'Color', width: 130 },
  {
    field: 'price', headerName: 'Price', type: 'number', width: 100,
  },
];

const rows = [
  {
    id: 1, category: 'Snow', name: 'Aon', color: 'white', price: 35,
  },
  {
    id: 2, category: 'Pnow', name: 'Jon', color: 'grey', price: 45,
  },
  {
    id: 3, category: 'Anow', name: 'Bon', color: 'red', price: 55,
  },
  {
    id: 4, category: 'Bnow', name: 'Son', color: 'blue', price: 65,
  },
  {
    id: 5, category: 'Cnow', name: 'Won', color: 'grey', price: 75,
  },
  {
    id: 6, category: 'Snow', name: 'Gon', color: 'nude', price: 85,
  },
  {
    id: 7, category: 'Snow', name: 'Jon', color: 'olive', price: 95,
  },
];

const Products = ({ ...props }) => (
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
        checkboxSelection
      />
    </Box>
    <Button variant="contained" fullWidth>DELETE SELECTED PRODUCTS</Button>
    <Button variant="contained" fullWidth sx={{ my: 5 }}>ADD NEW PRODUCT</Button>
  </Box>
);

export default Products;
