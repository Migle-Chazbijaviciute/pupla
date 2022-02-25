import React, { useState } from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import StyledHeader from '../../../components/styled-components/main-header';

const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  {
    field: 'title', headerName: 'Size', width: 150, editable: true,
  },
];

const Sizes = ({ data, ...props }) => {
  const [sizeUpdate, setSizeUpdate] = useState(data);
  const [snackbar, setSnackbar] = useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const handleUpdate = (e) => {
    const arr = sizeUpdate.map((oldItem) => {
      console.log('event:', e);
      console.log('oldvalue:', oldItem);
      if (oldItem.id === e.id) {
        setSnackbar({ children: 'Size successfully updated', severity: 'success' });
        return { ...oldItem, [e.field]: e.value };
      }
      setSnackbar({ children: 'Error while updating size', severity: 'error' });
      return { ...oldItem };
    });
    return setSizeUpdate(arr);
  };

  return (
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
          disableMultipleSelection
          editMode="cell"
          onCellEditCommit={handleUpdate}
        />
        {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={4000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
        )}
      </Box>
      <Button variant="contained" fullWidth type="submit">DELETE SELECTED SIZE</Button>
    </Box>
  );
};

export default Sizes;
