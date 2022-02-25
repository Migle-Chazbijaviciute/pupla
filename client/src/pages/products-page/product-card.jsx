import React from 'react';
import {
  Box,
  Grid,
  Link,
  Button,
  IconButton,
  Checkbox,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import StyledInfo from '../../components/styled-components/styled-info';

const ProductCard = ({
  id, images, label, price, shouldAddButton, deleteIcon,
}) => {
  if (images === undefined) return null;
  return (
    <Grid item key={id} xs={12} sm={6} md={4} xl={3} position="relative">
      <Link href={`/product/${id}`}>
        <Box
          src={images[0].src}
          component="img"
          sx={{
            width: '100%',
            height: { xs: 650 },
            objectFit: 'cover',
            paddingBlock: 20,
          }}
          alt={label}
          loading="lazy"
        />
      </Link>
      <Box sx={{
        display: 'flex', justifyContent: 'space-between', mx: 4,
      }}
      >
        <StyledInfo>{label}</StyledInfo>
        <StyledInfo sx={{ fontWeight: 550 }}>
          {price}
          €
        </StyledInfo>
      </Box>
      {
        shouldAddButton && (
        <Button fullWidth variant="outlined" sx={{ mt: 5 }}>
          MOVE TO BAG
        </Button>
        )
      }
      {
        deleteIcon
          ? (
            <IconButton
              sx={{
                position: 'absolute', right: 10, top: 10,
              }}
              size="medium"
            >
              <DeleteOutlineIcon />
            </IconButton>
          )
          : (
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              sx={{
                position: 'absolute', right: 10, top: 40,
              }}
              size="large"
            />
          )
      }
    </Grid>
  );
};

export default ProductCard;
