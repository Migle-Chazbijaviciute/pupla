import React from 'react';
import { Typography, styled } from '@mui/material';

const Styled = styled(Typography)(({ theme }, ...sx) => ({
  color: theme.palette.primary.dark,
  textTransform: 'uppercase',
  fontSize: '1.2rem',
  textDecoration: 'none',
  textAlign: 'left',
  ...sx,
}));

const StyledInfo = ({ children, ...sx }) => (
  <Styled {...sx}>
    {children}
  </Styled>
);

export default StyledInfo;
