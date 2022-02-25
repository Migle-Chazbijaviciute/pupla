import React from 'react';
import {
  Container,
  Box,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

const AuthForm = ({
  children,
  linkTo,
  linkTitle,
  onSubmit,
  // isValid,
}) => (
  <Container
    maxWidth="xs"
    component="main"
  >
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mx: { xs: 20, sm: 'auto' },
        maxWidth: 500,
      }}
      >
        {children}
      </Box>
      <Grid item xs={12} sx={{ mb: 1 }}>
        {
        linkTo && linkTitle
        && (
        <Link to={linkTo}>
          {linkTitle}
        </Link>
        )
        }
      </Grid>
    </Box>
  </Container>
);

export default AuthForm;
