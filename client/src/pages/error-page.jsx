import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

const ErrorPage = () => (
  <Box sx={{
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  }}
  >
    <Typography sx={{ fontSize: 30 }} color="primary">404: page was not found 🤷‍♀️</Typography>
  </Box>
);

export default ErrorPage;
