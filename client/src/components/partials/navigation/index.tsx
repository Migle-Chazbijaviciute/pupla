import React from 'react';
import { Box, styled } from '@mui/material';
import StyledLink from '../../styled-components/styled-link';

const StyledNavBox = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: theme.mixins.navigation.minHeight,
  background: theme.palette.primary.light,
  justifyContent: 'center',
  alignItems: 'center',
  px: 24,
  borderBottom: 'solid 1px ',
  borderColor: theme.palette.primary.border,
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'inline-flex',
    justifyContent: 'space-evenly',
  },
}));

const Navigation = () => (
  <StyledNavBox>
    <StyledLink to="/"> home</StyledLink>
    <StyledLink to="/products"> products</StyledLink>
    <StyledLink to="/information"> information</StyledLink>
    <StyledLink to="/contactUs"> contact us</StyledLink>
  </StyledNavBox>
);

export default Navigation;
