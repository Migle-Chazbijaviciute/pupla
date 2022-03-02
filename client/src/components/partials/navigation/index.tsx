import React from 'react';
import { Box, styled } from '@mui/material';
import StyledLink from '../../styled-components/styled-link';
import routes from '../../../routing/routes';

const StyledNavBox = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: theme.mixins.navigation.minHeight,
  background: theme.palette.primary.light,
  justifyContent: 'center',
  alignItems: 'center',
  px: 24,
  borderBottom: 'solid 1px ',
  borderColor: theme.palette.primary.dark,
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'inline-flex',
    justifyContent: 'space-evenly',
  },
}));

const Navigation: React.FC = () => (
  <StyledNavBox>
    <StyledLink to={routes.HomePage}> home</StyledLink>
    <StyledLink to={routes.ProductsPage}> products</StyledLink>
    <StyledLink to={routes.InformationPage}> information</StyledLink>
    <StyledLink to={routes.ContactUsPage}> contact us</StyledLink>
  </StyledNavBox>
);

export default Navigation;
