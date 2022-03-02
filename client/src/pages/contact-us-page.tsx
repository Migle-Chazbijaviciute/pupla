import React from 'react';
import { Box, styled } from '@mui/material';
import StyledHeader from '../components/styled-components/main-header';
import StyledInfo from '../components/styled-components/styled-info';

const StyledInsta = styled('img')(({ theme }) => ({
  marginBottom: 50,
  [theme.breakpoints.up('xs')]: {
    width: '98%',
  },
}));

const ContactUsPage: React.FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <StyledHeader>contact us</StyledHeader>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <StyledInsta
        alt="Pupla instagram."
        src="/static/images/pupla-insta.png"
      />
      <Box>
        <StyledInfo sx={{ mb: 5 }}>PHONE NUMBER: &nbsp;+37062221111</StyledInfo>
        <StyledInfo sx={{ mb: 5 }}>EMAIL: &nbsp;pupla.sho@gmail.com</StyledInfo>
        <StyledInfo>INSTAGRAM: &nbsp;@sho.pupla</StyledInfo>
      </Box>
    </Box>
  </Box>
);

export default ContactUsPage;
