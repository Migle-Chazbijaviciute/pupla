import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'size', headerName: 'Size', width: 150 },
];

const rows = [
  { id: 1, size: 'S' },
  { id: 2, size: 'M' },
  { id: 3, size: 'L' },
];

const Sizes = ({ ...props }) => (
  <Box sx={{
    display: { xs: 'block', sm: 'flex' },
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    ...props,
  }}
  >
    <StyledHeader>sizes</StyledHeader>
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
    <Button variant="contained" fullWidth>DELETE SELECTED SIZES</Button>
  </Box>
);

export default Sizes;
