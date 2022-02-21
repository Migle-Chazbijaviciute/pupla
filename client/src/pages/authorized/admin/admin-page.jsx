import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import API from '../../../services/api-service';
import StyledHeader from '../../../components/styled-components/main-header';
import StyledGridContainer from '../../../components/styled-components/grid-container';
import Products from './products';
import Categories from './categories';
import Sizes from './sizes';
import Colors from './colors';
import Users from './user';

const AdminPage = () => {
  const [state, setState] = useState({
    fetchedColors: [],
    fetchedSizes: [],
    fetchedCategories: [],
    fetchedGarments: [],
    fetchedUsers: [],
  });
  const {
    fetchedColors, fetchedSizes, fetchedCategories, fetchedGarments, fetchedUsers,
  } = state;

  useEffect(() => {
    (async () => {
      const [{ color }, { size }, { category }, { garment }, { users }] = await Promise.all([
        API.getColors(),
        API.getSizes(),
        API.getCategories(),
        API.getGarments(),
        API.getUsers(),
      ]);

      setState({
        fetchedColors: color,
        fetchedSizes: size,
        fetchedCategories: category,
        fetchedGarments: garment,
        fetchedUsers: users,
      });
    })();
  }, []);

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
          <Products data={fetchedGarments} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Categories data={fetchedCategories} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Colors data={fetchedColors} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Sizes data={fetchedSizes} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Users data={fetchedUsers} />
        </Grid>
      </StyledGridContainer>
    </Box>
  );
};

export default AdminPage;
