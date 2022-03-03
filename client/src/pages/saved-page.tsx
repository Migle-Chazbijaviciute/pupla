import React, { useEffect } from 'react';
import {
  Box,
} from '@mui/material';
import ProductCard from './products-page/product-card';
import StyledHeader from '../components/styled-components/main-header';
import StyledGridContainer from '../components/styled-components/grid-container';
import API from '../services/api-service';
import { Garment } from '../types';

const SavedPage: React.FC = () => {
  const [products, setProducts] = React.useState<Garment[]>([]);

  useEffect(() => {
    (async () => {
      const prod = await API.getGarments();
      if (typeof prod !== 'string') {
        setProducts(prod);
      }
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
      <StyledHeader>Saved Items</StyledHeader>
      <StyledGridContainer container maxWidth="90%">

        {products.length > 0 && products[0].images !== undefined ? products.map((item) => (
          <ProductCard
            key={item.id}
            deleteIcon
            shouldAddButton
            {...item}
            sx={{
              height: { xs: 300, sm: 350, md: 450 },
            }}
          />
        ))
          : <Box fontSize={22}>THERE IS NO SAVED ITEMS YET...</Box>}

      </StyledGridContainer>
    </Box>
  );
};

export default SavedPage;
