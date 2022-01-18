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
  return (
    <Box sx={{
      minWidth: '100%',
      minHeight: theme.mixins.navigation.minHeight,
      display: 'inline-flex',
      background: theme.palette.primary.light,
      justifyContent: 'center',
      alignItems: 'center',
      px: 12,
      borderBottom: 'solid 1px ',
      borderColor: theme.palette.primary.border,
    }}
    >
      <StyledFont to="/"> home</StyledFont>
      <StyledFont to="/products"> products</StyledFont>
      <StyledFont to="/information"> information</StyledFont>
      <StyledFont to="/contactUs"> contact us</StyledFont>
    </Box>
  );
};

export default Navigation;
