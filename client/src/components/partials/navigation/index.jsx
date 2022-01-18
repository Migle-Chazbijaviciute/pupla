import React from 'react';
import {
  Box, useTheme, styled,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const theme = useTheme();

  const StyledFont = styled(NavLink)({
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    paddingInline: 25,
    textDecoration: 'none',
    '&.active': {
      textDecoration: 'underline',
    },
  });

  const StyledNavBox = styled(Box)({
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
  });
  return (
    <StyledNavBox>
      <StyledFont to="/"> home</StyledFont>
      <StyledFont to="/products"> products</StyledFont>
      <StyledFont to="/information"> information</StyledFont>
      <StyledFont to="/contactUs"> contact us</StyledFont>
    </StyledNavBox>
  );
};

export default Navigation;
