import React from 'react';
import {
  Box, Typography, styled, Link,
} from '@mui/material';
import { useTheme } from '@emotion/react';

const HomePage = () => {
  const theme = useTheme();

  const StyledHeader = styled(Typography)({
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    fontSize: 30,
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
    [theme.breakpoints.up('lg')]: {
      width: 400,
    },
  });

  const ImagesBox = styled(Box)({
    display: 'flex',
    background: theme.palette.secondary.main,
    width: '90%',
    marginBottom: 40,
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });

  const StyledHero = styled(Box)({
    position: 'relative',
    [theme.breakpoints.up('xs')]: {
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '60%',
    },
  });

  const StyledHeroQoute = styled(Box)({
    marginTop: 2,
    position: 'relative',
    bottom: 30,
    [theme.breakpoints.up('xs')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '30%',
    },
  });

  const limited = [
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262820488_4623068701113268_3692456574835045560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PxOG6n91ddwAX83GZg8&_nc_ht=scontent.fvno1-1.fna&oh=00_AT8I5Tg__tWB2EBKOK0d-aQ_cvOKziE5nYS2KFv3dLafoA&oe=61EBD601',
      title: 'limited1',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262572593_4623068711113267_5741378821227030688_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XUcyFsOUGyMAX-bQSz6&_nc_ht=scontent.fvno1-1.fna&oh=00_AT81aWDpeGxd_6ACV8nnVQTfDGzAvZ1wldiX6Xa-IC8LaA&oe=61EB35DA',
      title: 'limited2',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/261766297_4621107807976024_3560666404319759911_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bvQLTCR5AkEAX9yqIr2&_nc_ht=scontent.fvno1-1.fna&oh=00_AT_-xUq39pPu4ppo4a5NcBV7_pvmZUxu4ruiK-sSCUX3Kw&oe=61EB22A8',
      title: 'limited3',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262912268_4621107824642689_6315757410842768446_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_ok9OJ5M_CEAX_vi2AO&_nc_ht=scontent.fvno1-1.fna&oh=00_AT_-rGtxOZoX_FjQP9Gt1xKyYzrFViQRviwaR4Yb89zAOQ&oe=61EB8E64',
      title: 'limited4',
    },
  ];
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.palette.primary.light,
    }}
    >
      <StyledHero
        component="img"
        alt="Pupla hero."
        src="/static/images/hero-image.jpg"
      />
      <StyledHeroQoute
        component="img"
        alt="Pupla qoute."
        src="/static/images/feel-the-power.jpg"
      />

      {/* LIMITED EDITION */}
      <StyledHeader>limited edition</StyledHeader>
      <ImagesBox>
        {limited.map(({ img, title }) => (
          <StyledImgBox key={title}>
            <Link href="/products">
              <Box
                component="img"
                sx={{
                  width: '100%',
                }}
                alt="Limited edition."
                src={img}
              />
            </Link>
          </StyledImgBox>
        ))}
      </ImagesBox>
    </Box>
  );
};
export default HomePage;
