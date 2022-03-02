import React from 'react';
import {
  styled,
} from '@mui/material';
import { StyledMainBox } from '.';

const StyledHero = styled('img')(({ theme }) => ({
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

}));

const StyledHeroQoute = styled('img')(({ theme }) => ({
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
}));

const HomeHero: React.FC = () => (
  <StyledMainBox>
    <StyledHero
      alt="Pupla hero."
      src="/static/images/hero-image.jpg"
    />
    <StyledHeroQoute
      alt="Pupla qoute."
      src="/static/images/feel-the-power.jpg"
    />
  </StyledMainBox>
);

export default HomeHero;
