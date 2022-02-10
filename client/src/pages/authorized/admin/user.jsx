import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'surname', headerName: 'Surname', width: 130 },
  { field: 'email', headerName: 'Email', width: 120 },
];

const rows = [
  {
    id: 1, name: 'Dress', surname: 'Dress', email: 'Dress@gmail.com',
  },
  {
    id: 2, name: 'Bress', surname: 'Bress', email: 'Bress@gmail.com',
  },
  {
    id: 3, name: 'Aress', surname: 'Aress', email: 'Aress@gmail.com',
  },
  {
    id: 4, name: 'Cress', surname: 'Cress', email: 'Cress@gmail.com',
  },
  {
    id: 5, name: 'Gress', surname: 'Gress', email: 'Gress@gmail.com',
  },
  {
    id: 6, name: 'Hress', surname: 'Hress', email: 'Hress@gmail.com',
  },
  {
    id: 7, name: 'Jress', surname: 'Jress', email: 'Jress@gmail.com',
  },
];

const Users = ({ ...props }) => (
  <Box sx={{
    display: { xs: 'block', sm: 'flex' },
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    ...props,
  }}
  >
    <StyledHeader>users</StyledHeader>
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
    <Button variant="contained" fullWidth>DELETE SELECTED USERS</Button>
  </Box>
);

export default Users;
