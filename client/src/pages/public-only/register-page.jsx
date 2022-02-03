import React from 'react';
import {
  TextField,
  Grid,
  Box,
  Button,
  Typography,
  styled,
} from '@mui/material';
import { useTheme } from '@emotion/react';

const RegisterPage = () => {
  const theme = useTheme();

  const StyledHeader = styled(Typography)({
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '2em',
    textDecoration: 'none',
    marginBottom: 30,
    marginTop: 20,
  });

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      mx: { xs: 20, sm: 'auto' },
      maxWidth: 500,
    }}
    >
      <StyledHeader>REGISTER</StyledHeader>
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            type="name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="surname"
            variant="outlined"
            label="Surname"
            type="surname"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="password"
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="repeatPassword"
            variant="outlined"
            label="Repeat Password"
            type="repeatPassword"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: theme.palette.primary.main }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterPage;
