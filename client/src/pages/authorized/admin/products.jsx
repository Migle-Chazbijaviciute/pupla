import React from 'react';
import {
  Box,
  Button,
  Link,
} from '@mui/material';
import StyledHeader from '../../../components/styled-components/main-header';
import StyledInfo from '../../../components/styled-components/styled-info';
import API from '../../../services/api-service';

const Products = ({ data, ...props }) => {
  const cardData = data.map(({
    id, price, label, color, category, images,
  }) => ({
    id,
    price,
    label,
    colorTitle: color.title,
    categoryTitle: category.title,
    img: images[0].src,
  }));

  const handleDelete = async (id) => {
    await API.deleteGarment(id);
    window.location.reload();
  };

  return (
    <Box sx={{
      justifyContent: 'center',
      ...props,
    }}
    >
      <StyledHeader>products</StyledHeader>
      <Box sx={{
        gap: 20,
        display: 'flex',
        flexWrap: 'wrap',
      }}
      >
        {cardData.map(({
          id, price, label, colorTitle, categoryTitle, img,
        }) => (
          <Box
            key={id}
            position="relative"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              boxShadow: 1,
            }}
          >
            <Link href={`/product/${id}`}>
              <Box
                src={img}
                component="img"
                sx={{
                  width: 200,
                  paddingBlock: 5,
                }}
                alt={label}
                loading="lazy"
              />
            </Link>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              mx: 3,
              mb: 5,
            }}
            >
              <StyledInfo sx={{ fontSize: '1rem' }}>{label}</StyledInfo>
              <StyledInfo sx={{ fontSize: '1rem' }}>{colorTitle}</StyledInfo>
              <StyledInfo sx={{ fontSize: '1rem' }}>{categoryTitle}</StyledInfo>
              <StyledInfo sx={{ fontSize: '1rem', fontWeight: 550 }}>
                {price}
                €
              </StyledInfo>
            </Box>
            <Box sx={{
              display: 'flex', flexDirection: 'row', justifyContent: 'space-around', pb: 5,
            }}
            >
              <Button size="small" variant="outlined">UPDATE</Button>
              <Button size="small" variant="outlined" onClick={() => handleDelete(id)}>DELETE</Button>
            </Box>
          </Box>
        ))}
        <Button variant="contained" fullWidth sx={{ my: 5 }} href="/add-product">ADD NEW PRODUCT</Button>
      </Box>
    </Box>
  );
};

export default Products;
