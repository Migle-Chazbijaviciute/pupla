import React from 'react';
import ProductCard from './product-card';
import StyledGridContainer from '../../components/styled-components/grid-container';
import Garment from '../../types/garment';

type ProductsGridProps = {
  data: Garment[]
};

const ProductsGrid: React.FC<ProductsGridProps> = ({ data }) => {
  if (data === undefined) return null;

  const products = data.map(({
    id, label, price, images,
  }) => ({
    id,
    label,
    price,
    images,
  }));

  return (
    <StyledGridContainer container maxWidth="90%">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </StyledGridContainer>
  );
};

export default ProductsGrid;
