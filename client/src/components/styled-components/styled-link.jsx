import React from 'react';
import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Styled = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textTransform: 'uppercase',
  paddingInline: 5,
  textDecoration: 'none',
  '&.active': {
    textDecoration: 'underline',
  },
}));

const StyledLink = ({ children, ...sx }) => (
  <Styled {...sx}>
    {children}
  </Styled>
);

export default StyledLink;
