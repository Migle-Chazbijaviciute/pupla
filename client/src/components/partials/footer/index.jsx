import React from 'react';
import { Box, Divider, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box>
      <Divider orientation="horizontal" color={theme.palette.secondary.main} />
      <Box sx={{
        height: theme.mixins.footer.height,
        background: theme.palette.secondary.main,
        display: 'flex',
        paddingInline: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Box>
          © 2022, PÙPLA
        </Box>
        <Box>
          <Link href="https://www.facebook.com/sho.pupla/"><FacebookIcon sx={{ mx: 5 }} /></Link>
          <Link href="https://www.instagram.com/sho.pupla/">
            <InstagramIcon sx={{ mx: 5 }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
