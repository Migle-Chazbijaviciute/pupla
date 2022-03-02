import React from 'react';
import { Typography, styled, TypographyProps } from '@mui/material';

const StyledH = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: '2em',
  textDecoration: 'none',
  marginBottom: 20,
  marginTop: 20,
}));

type StyledHProps = TypographyProps;

const StyledHeader: React.FC<StyledHProps> = ({ children, ...props }) => (
  <StyledH {...props}>
    {children}
  </StyledH>
);

export default StyledHeader;
