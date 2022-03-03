import React from 'react';
import {
  Box,
  Grid,
  Link,
  Button,
  IconButton,
  Checkbox,
  SxProps,
  Theme,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import StyledInfo from '../../components/styled-components/styled-info';
import { Image } from '../../types';

type ProductCardProps = {
  id: string;
  images: Image[];
  label: string;
  price: string;
  shouldAddButton?: boolean;
  deleteIcon?: boolean;
  sx?: SxProps<Theme>;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  images,
  label,
  price,
  shouldAddButton,
  deleteIcon,
  sx,
}) => {
  if (images === undefined) return null;

  return (
    <Grid sx={{ width: { xs: '100%', lg: '80%' } }} position="relative" item key={id} xs={12} sm={6} md={4} xl={3}>
      <Link href={`/product/${id}`}>
        <Box
          src={images[0].src}
          component="img"
          sx={{
            width: '100%',
            height: { xs: 400, sm: 500, md: 650 },
            objectFit: 'cover',
            paddingBlock: 10,
            '&:hover': {
              cursor: 'pointer',
            },
            ...sx,
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
                position: 'absolute', right: 10, top: 30, padding: 0,
              }}
              size="large"
            >
              <DeleteOutlineIcon />
            </IconButton>
          )
          : (
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              sx={{
                position: 'absolute', right: 10, top: 30,
              }}
              size="medium"
            />
          )
      }
    </Grid>
  );
};

export default ProductCard;
