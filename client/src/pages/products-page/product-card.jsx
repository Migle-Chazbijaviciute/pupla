import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Grid,
  useTheme,
  styled,
  Checkbox,
  Link,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ProductCard = ({
  img, title, price, shouldAddButton, deleteIcon,
}) => {
  const theme = useTheme();

  const StyledInfo = styled(Typography)({
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontSize: '1.2rem',
  });

  return (
    <Grid item key={uuidv4()} xs={12} sm={6} md={4} xl={3} sx={{ position: 'relative' }}>
      <Link href="/product/1">
        <Box
          src={img}
          component="img"
          width="100%"
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
                position: 'absolute', right: 10, top: 10,
              }}
              size="medium"
            />
          )
      }
    </Grid>
  );
};

export default ProductCard;
