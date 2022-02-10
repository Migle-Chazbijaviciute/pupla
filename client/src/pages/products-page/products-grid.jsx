import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from './product-card';
import StyledGridContainer from '../../components/styled-components/grid-container';

const ProductsGrid = () => {
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

  return (
    <StyledGridContainer container maxWidth="90%">
      {itemData.map((item) => (
        <ProductCard key={uuidv4()} {...item} />
      ))}
    </StyledGridContainer>
  );
};

export default ProductsGrid;
