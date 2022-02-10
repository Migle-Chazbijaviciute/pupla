import React from 'react';
import {
  Box,
  Grid,
  styled,
  useTheme,
} from '@mui/material';
import StyledHeader from '../../../components/styled-components/main-header';
import Products from './products';
import Categories from './categories';
import Users from './user';

const AdminPage = () => {
  const theme = useTheme();

  const StyledGridContainer = styled(Grid)({
    backgroundColor: theme.palette.secondary.main,
    '.MuiGrid-root.MuiGrid-item': {
      paddingTop: 0,
      paddingLeft: 0,
      padding: 8,
    },
    [theme.breakpoints.up('xs')]: {
      paddingInline: 30,
      marginBottom: 10,
      paddingBlock: 10,
    },
    [theme.breakpoints.up('md')]: {
      paddingBlock: 10,
      marginBottom: 25,
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <StyledHeader>Admin Page</StyledHeader>
      <StyledGridContainer container>
        <Grid item xs={12}>
          <Products />
        </Grid>
        <Grid item xs={12} md={6}>
          <Categories />
        </Grid>
        <Grid item xs={12} md={6}>
          <Users />
        </Grid>
      </StyledGridContainer>
    </Box>
  );
};

export default AdminPage;
