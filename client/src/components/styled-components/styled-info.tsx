import React from 'react';
import { Typography, styled, TypographyProps } from '@mui/material';

const Styled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textTransform: 'uppercase',
  fontSize: '1.2rem',
  textDecoration: 'none',
  textAlign: 'left',
}));

type StyledInfoProps = TypographyProps;

const StyledInfo: React.FC<StyledInfoProps> = ({ children, ...props }) => (
  <Styled {...props}>
    {children}
  </Styled>
);

export default StyledInfo;
