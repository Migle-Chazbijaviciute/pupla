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

const LoginPage = () => {
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
      <StyledHeader>LOGIN</StyledHeader>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            name="email"
            variant="outlined"
            label="El. paštas"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="password"
            variant="outlined"
            label="Slaptažodis"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Button
            variant="outlined"
            fullWidth
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
