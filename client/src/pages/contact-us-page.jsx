import React from 'react';
import {
  Box, Typography, useTheme, styled,
} from '@mui/material';

const ContactUsPage = () => {
  const theme = useTheme();

  const StyledHeader = styled(Typography)({
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '2em',
    textDecoration: 'none',
    marginBottom: 50,
    marginTop: 20,
  });

  const StyledInfo = styled(Typography)({
    color: theme.palette.primary.dark,
    // textTransform: 'uppercase',
    fontSize: '1.05rem',
    marginBottom: 20,
  });

  const StyledInsta = styled(Box)({
    marginBottom: 50,
    [theme.breakpoints.up('xs')]: {
      width: '98%',
    },
  });

  return (
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
          component="img"
          alt="Pupla instagram."
          src="/static/images/pupla-insta.png"
        />
        <Box>
          <StyledInfo>PHONE NUMBER: &nbsp;+37062221111</StyledInfo>
          <StyledInfo>EMAIL: &nbsp;pupla.sho@gmail.com</StyledInfo>
          <StyledInfo>INSTAGRAM: &nbsp;@sho.pupla</StyledInfo>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsPage;
