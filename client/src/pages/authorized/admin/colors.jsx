import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'color', headerName: 'Colors', width: 150 },
];

const rows = [
  { id: 1, color: 'White' },
  { id: 2, color: 'Black' },
  { id: 3, color: 'Nude' },
  { id: 4, color: 'Grey' },
  { id: 5, color: 'Olive' },
  { id: 6, color: 'Purple' },
];

const Colors = ({ ...props }) => (
  <Box sx={{
    display: { xs: 'block', sm: 'flex' },
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    ...props,
  }}
  >
    <StyledHeader>colors</StyledHeader>
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
    <Button variant="contained" fullWidth>DELETE SELECTED COLORS</Button>
  </Box>
);

export default Colors;
