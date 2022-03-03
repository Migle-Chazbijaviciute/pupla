import React from 'react';
import {
  Box,
  Button,
  Link,
  Divider,
  Grid,
} from '@mui/material';
// import StyledGridContainer from 'components/styled-components/grid-container';
import StyledHeader from '../../../components/styled-components/main-header';
import StyledInfo from '../../../components/styled-components/styled-info';
import API from '../../../services/api-service';
import Garment from '../../../types/garment';

type ProductsProps = {
  data: Garment[] | string,
};

type HandleDelete = (id: string) => Promise<void>;

const Products: React.FC<ProductsProps> = ({ data }) => {
  if (typeof data === 'string') { return null; }

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

  const handleDelete: HandleDelete = async (id) => {
    await API.deleteGarment(id);
    window.location.reload();
  };

  return (
    <Box sx={{
      justifyContent: 'center',
    }}
    >
      <StyledHeader>products</StyledHeader>
      <Grid container>
        {cardData.map(({
          id, price, label, colorTitle, categoryTitle, img,
        }) => (
          <Grid sx={{ boxShadow: 1 }} item key={id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Link href={`/product/${id}`}>
              <Box
                src={img}
                component="img"
                sx={{
                  width: '100%',
                  height: { xs: 300 },
                  paddingBlock: 5,
                  objectFit: 'cover',
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
              <StyledInfo sx={{ fontSize: { xs: '0.95rem', xl: '1rem' } }}>{label}</StyledInfo>
              <Divider />
              <StyledInfo
                sx={{
                  fontSize: { xs: '0.95rem', xl: '1rem' },
                }}
              >
                Color:
                {'  '}
                {colorTitle}
              </StyledInfo>
              <StyledInfo sx={{ fontSize: { xs: '0.95rem', xl: '1rem' } }}>
                Category:
                {'  '}
                {categoryTitle}
              </StyledInfo>
              <StyledInfo sx={{ fontSize: { xs: '0.95rem', xl: '1rem' }, fontWeight: 550 }}>
                {price}
                €
              </StyledInfo>
            </Box>
            <Box sx={{
              display: 'flex', flexDirection: 'row', justifyContent: 'space-around', pb: 5,
            }}
            >
              <Button size="small" variant="outlined" href={`/update-product/${id}`}>UPDATE</Button>
              <Button size="small" variant="outlined" onClick={() => handleDelete(id)}>DELETE</Button>
            </Box>
          </Grid>
        ))}
        <Button variant="contained" fullWidth sx={{ my: 5 }} href="/add-product">ADD NEW PRODUCT</Button>
      </Grid>
    </Box>
  );
};

export default Products;
