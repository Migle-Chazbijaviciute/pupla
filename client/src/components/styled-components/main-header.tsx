import React from 'react';
import { Typography, styled } from '@mui/material';

const StyledH = styled(Typography)(({ theme }, ...sx) => ({
  color: theme.palette.secondary.dark,
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: '2em',
  textDecoration: 'none',
  marginBottom: 20,
  marginTop: 20,
  ...sx,
}));

const StyledHeader = ({ children, ...sx }) => (
  <StyledH {...sx}>
    {children}
  </StyledH>
);

export default StyledHeader;
