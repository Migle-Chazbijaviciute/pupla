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
    fontSize: 40,
    textDecoration: 'none',
    marginBottom: 30,
  });

  const StyledImgBox = styled(Box)({
    background: theme.palette.primary.dark,
    width: '50%',
    marginTop: 40,
    marginBottom: 40,
    marginInline: 60,
    paddingInline: 40,
    paddingBlock: 20,
    display: 'flex',
    justifyContent: 'center',
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
      <Box
        component="img"
        sx={{
          marginTop: 10,
          width: '40%',
          position: 'relative',
        }}
        alt="Pupla hero."
        src="/static/images/hero-image.jpg"
      />
      <Box
        component="img"
        sx={{
          marginTop: 2,
          width: '35%',
          position: 'relative',
          bottom: 30,

        }}
        alt="Pupla qoute."
        src="/static/images/feel-the-power.jpg"
      />

      {/* LIMITED EDITION */}
      <StyledHeader>limited edition</StyledHeader>
      <Box sx={{
        background: theme.palette.secondary.main,
        width: '90%',
        display: 'flex',
      }}
      >
        <StyledImgBox>
          <Link href="/products">
            <Box
              component="img"
              sx={{
                width: '100%',
              }}
              alt="Limited edition."
              src="/static/images/hero-image.jpg"
            />
          </Link>

        </StyledImgBox>
        <StyledImgBox>
          <Link href="/products">
            <Box
              component="img"
              sx={{
                width: '100%',
              }}
              alt="Limited edition."
              src="/static/images/hero-image.jpg"
            />
          </Link>

        </StyledImgBox>
      </Box>
    </Box>
  );
};
export default HomePage;
