import React from 'react';
import {
  Box,
  Grid,
  useTheme,
  styled,
  Link,
  Typography,
  Button,
  IconButton,
  Checkbox,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const ProductCard = ({
  id, img, title, price, shouldAddButton, deleteIcon,
}) => {
  const theme = useTheme();

  const StyledInfo = styled(Typography)({
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontSize: '1.2rem',
  });

  return (
    <Grid item key={id} xs={12} sm={6} md={4} xl={3} position="relative">
      <Link href={`/product/${id}`}>
        <Box
          src={img[2].src}
          component="img"
          sx={{
            width: '100%',
            height: { xs: 650 },
            objectFit: 'cover',
            paddingBlock: 20,
          }}
          alt={title}
          loading="lazy"
        />
      </Link>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: 4 }}>
        <StyledInfo>{title}</StyledInfo>
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
