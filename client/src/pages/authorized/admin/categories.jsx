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
];

const rows = [
  { id: 1, category: 'Dress' },
  { id: 2, category: 'Bress' },
  { id: 3, category: 'Aress' },
  { id: 4, category: 'Cress' },
  { id: 5, category: 'Gress' },
  { id: 6, category: 'Hress' },
  { id: 7, category: 'Jress' },
];

const Categories = ({ ...props }) => (
  <Box sx={{
    display: { xs: 'block', sm: 'flex' },
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    ...props,
  }}
  >
    <StyledHeader>categories</StyledHeader>
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
    <Button variant="contained" fullWidth>DELETE SELECTED CATEGORIES</Button>
    <Button variant="contained" fullWidth sx={{ my: 5 }}>ADD NEW CATEGORY</Button>
  </Box>
);

export default Categories;
