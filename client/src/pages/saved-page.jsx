import React from 'react';
import {
  Grid, useTheme, styled, Box, Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from './products-page/product-card';

const SavedPage = () => {
  const theme = useTheme();

  const saved = [
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/265956465_4656109194475885_3426648355086172265_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=NB4L67TgzQ0AX_fS6fC&_nc_ht=scontent.fvno1-1.fna&oh=00_AT-aL24ec3IUbaK9TSxCu0vH_7xRiGEKGG9Mhmg1B0Q9Mg&oe=61FF7400',
      title: 'limited1',
      price: 50,
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262820488_4623068701113268_3692456574835045560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3RMTjWpkwmUAX973Gh0&_nc_ht=scontent.fvno1-1.fna&oh=00_AT-BpL2RiToFnhEQ_CFQXBeclsMxs5P6K9Jm77maW2q0WQ&oe=61FF9C81',
      title: 'limited2',
      price: 50,
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/265956465_4656109194475885_3426648355086172265_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=NB4L67TgzQ0AX_fS6fC&_nc_ht=scontent.fvno1-1.fna&oh=00_AT-aL24ec3IUbaK9TSxCu0vH_7xRiGEKGG9Mhmg1B0Q9Mg&oe=61FF7400',
      title: 'limited1',
      price: 50,
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262820488_4623068701113268_3692456574835045560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3RMTjWpkwmUAX973Gh0&_nc_ht=scontent.fvno1-1.fna&oh=00_AT-BpL2RiToFnhEQ_CFQXBeclsMxs5P6K9Jm77maW2q0WQ&oe=61FF9C81',
      title: 'limited2',
      price: 50,
    },
  ];

  const StyledHeader = styled(Typography)({
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '2em',
    textDecoration: 'none',
    marginBottom: 20,
    marginTop: 20,
  });

  const StyledGridContainer = styled(Grid)({
    backgroundColor: theme.palette.secondary.main,
    alignItems: 'center',
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <StyledHeader>Saved Items</StyledHeader>
      <StyledGridContainer container maxWidth="90%">

        {saved.length > 0 ? saved.map((item) => (
          <ProductCard key={uuidv4()} {...item} shouldAddButton deleteIcon />
        ))
          : <Box fontSize={22}>THERE IS NO SAVED ITEMS YET...</Box>}

      </StyledGridContainer>
    </Box>
  );
};

export default SavedPage;
