import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';

const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'title', headerName: 'Size', width: 150 },
];

const Sizes = ({ data, ...props }) => (
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
        rows={data}
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
