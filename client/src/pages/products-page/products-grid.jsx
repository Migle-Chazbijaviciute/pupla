import React from 'react';
import {
  Grid,
  useTheme,
  styled,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from './product-card';

const ProductsGrid = () => {
  const theme = useTheme();

  const itemData = [
    {
      img: '/static/stock/blackSet1.jpg',
      title: 'limited1',
      price: 50,
    },
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
    {
      img: 'static/stock/redDress2.jpg',
      title: 'limited2',
      price: 50,
    },
    {
      img: '/static/stock/blackSet1.jpg',
      title: 'limited1',
      price: 50,
    },
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
    {
      img: 'static/stock/redDress2.jpg',
      title: 'limited2',
      price: 50,
    },
  ];

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
    <StyledGridContainer container maxWidth="90%">
      {itemData.map((item) => (
        <ProductCard key={uuidv4()} {...item} />
      ))}
    </StyledGridContainer>
  );
};

export default ProductsGrid;
