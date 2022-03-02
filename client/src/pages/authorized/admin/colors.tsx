import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import StyledHeader from '../../../components/styled-components/main-header';
import Color from '../../../types/color';

const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'title', headerName: 'Colors', width: 150 },
];

type ColorsProps = {
  data: Color[] | string,
};

const Colors: React.FC<ColorsProps> = ({ data }) => {
  if (typeof data === 'string') { return null; }

  return (
    <Box sx={{
      display: { xs: 'block', sm: 'flex' },
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}
    >
      <StyledHeader>colors</StyledHeader>
      <Box style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
      <Button variant="contained" fullWidth>DELETE SELECTED COLORS</Button>
    </Box>
  );
};
export default Colors;
