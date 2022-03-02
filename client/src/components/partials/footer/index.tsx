import React from 'react';
import { Box, Link, styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledFooterBox = styled(Box)(({ theme }) => ({
  height: theme.mixins.footer.height,
  background: theme.palette.secondary.main,
  display: 'flex',
  paddingInline: 20,
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: 'solid 1px',
  borderColor: theme.palette.primary.dark,
}));

const Footer: React.FC = () => (
  <Box>
    <StyledFooterBox>
      <Box>
        © 2022, PÙPLA
      </Box>
      <Box>
        <Link href="https://www.facebook.com/sho.pupla/" target="blank"><FacebookIcon sx={{ mx: 5 }} /></Link>
        <Link href="https://www.instagram.com/sho.pupla/" target="blank">
          <InstagramIcon sx={{ mx: 5 }} />
        </Link>
      </Box>
    </StyledFooterBox>
  </Box>
);

export default Footer;
