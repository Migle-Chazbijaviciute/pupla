import React from 'react';
import {
  Box,
  styled,
  Typography,
  Link,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '@emotion/react';

const HomeCarousel = () => {
  const theme = useTheme();

  const limited = [
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
    fontSize: '2em',
    textDecoration: 'none',
    marginBottom: 30,
  });

  const StyledImgBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginBlock: 20,
    marginInline: 30,
    [theme.breakpoints.up('xs')]: {
      width: '50%',
    },
  });

  const ImagesBox = styled(Box)({
    display: 'flex',
    background: theme.palette.secondary.main,
    marginBottom: 40,
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
  });

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.palette.primary.light,
    }}
    >
      <StyledHeader>limited edition</StyledHeader>
      <ImagesBox>
        {limited.map(({ img, title }) => (
          <StyledImgBox key={uuidv4()}>
            <Link href="/product/1">
              <Box
                component="img"
                sx={{
                  width: '100%',
                }}
                alt={title}
                src={img}
              />
            </Link>
          </StyledImgBox>
        ))}
      </ImagesBox>
    </Box>
  );
};

export default HomeCarousel;
