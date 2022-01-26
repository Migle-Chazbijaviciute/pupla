import React from 'react';
import {
  Box,
  styled,
} from '@mui/material';
import { useTheme } from '@emotion/react';

const HomeHero = () => {
  const theme = useTheme();

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
    </Box>
  );
};

export default HomeHero;
