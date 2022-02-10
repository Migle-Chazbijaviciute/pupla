import React from 'react';
import {
  Box,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from './products-page/product-card';
import StyledHeader from '../components/styled-components/main-header';
import StyledGridContainer from '../components/styled-components/grid-container';

const SavedPage = () => {
  const saved = [
    {
      img: 'static/stock/blackSet2.jpg',
      title: 'limited2',
      price: 50,
    },
    {
      img: 'static/stock/redDress1.jpg',
      title: 'limited1',
      price: 50,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <StyledHeader>Saved Items</StyledHeader>
      <StyledGridContainer container maxWidth="90%">

        {saved.length > 0 ? saved.map((item) => (
          <ProductCard key={uuidv4()} {...item} shouldAddButton deleteIcon />
        ))
          : <Box fontSize={22}>THERE IS NO SAVED ITEMS YET...</Box>}

      </StyledGridContainer>
    </Box>
  );
};

export default SavedPage;
