import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';
import LoggedInUser from '../../../types/logged-in-user';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'surname', headerName: 'Surname', width: 120 },
  { field: 'email', headerName: 'Email', width: 140 },
];

type UsersProps = {
  data: LoggedInUser[] | string,
};

const Users: React.FC<UsersProps> = ({ data }) => {
  if (typeof data === 'string') { return null; }

  return (
    <Box sx={{
      display: { xs: 'block', sm: 'flex' },
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}
    >
      <StyledHeader>users</StyledHeader>
      <Box style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
      <Button variant="contained" fullWidth>DELETE SELECTED USERS</Button>
    </Box>
  );
};

export default Users;
