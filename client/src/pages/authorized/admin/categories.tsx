import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';
import Category from '../../../types/category';

const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'title', headerName: 'Category', width: 150 },
];

type CategoriesProps = {
  data: Category[] | string,
};

const Categories: React.FC<CategoriesProps> = ({ data }) => {
  if (typeof data === 'string') { return null; }

  return (
    <Box sx={{
      display: { xs: 'block', sm: 'flex' },
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}
    >
      <StyledHeader>categories</StyledHeader>
      <Box style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
      <Button variant="contained" fullWidth>DELETE SELECTED CATEGORIES</Button>
    </Box>
  );
};
export default Categories;
