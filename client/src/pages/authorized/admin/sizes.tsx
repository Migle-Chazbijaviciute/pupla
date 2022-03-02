import React, { useState } from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid, GridCellEditCommitParams } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';
import { Size } from '../../../types';

const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  {
    field: 'title', headerName: 'Size', width: 150, editable: true,
  },
];

type SizesProps = {
  data: Size[] | string,
};

type HandleUpdate = (e: GridCellEditCommitParams) => void;

const Sizes: React.FC<SizesProps> = ({ data }) => {
  if (typeof data === 'string') { return null; }

  const [sizeUpdate, setSizeUpdate] = useState(data);

  const handleUpdate: HandleUpdate = (e) => {
    const arr = sizeUpdate.map((oldItem) => {
      if (oldItem.id === e.id) {
        return { ...oldItem, [e.field]: e.value };
      }
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
    }}
    >
      <StyledHeader>sizes</StyledHeader>
      <Box style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          editMode="cell"
          onCellEditCommit={handleUpdate}
        />
      </Box>
      <Button variant="contained" fullWidth type="submit">DELETE SELECTED SIZE</Button>
    </Box>
  );
};

export default Sizes;
