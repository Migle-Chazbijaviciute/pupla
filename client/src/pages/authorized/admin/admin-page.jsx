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
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [garments, setGarments] = useState([]);
  const [fetchedUsers, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { color } = await API.getColors();
      const { size } = await API.getSizes();
      const { category } = await API.getCategories();
      const { garment } = await API.getGarments();
      const { users } = await API.getUsers();
      setColors(color);
      setSizes(size);
      setCategories(category);
      setGarments(garment);
      setUsers(users);
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
          <Products data={garments} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Categories data={categories} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Colors data={colors} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Sizes data={sizes} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Users data={fetchedUsers} />
        </Grid>
      </StyledGridContainer>
    </Box>
  );
};

export default AdminPage;
