import React from 'react';
import {
  TextField,
  Grid,
  Box,
  Button,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import CountrySelect from './country-select';

const ProfilePage = () => {
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
      <StyledHeader>PROFILE</StyledHeader>
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
            name="mobile"
            variant="outlined"
            label="Mobile"
            type="mobile"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Typography>Shipping Information :</Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <CountrySelect />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="address"
            variant="outlined"
            label="Address"
            type="address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="city"
            variant="outlined"
            label="City"
            type="city"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="postcode"
            variant="outlined"
            label="Postcode"
            type="postcode"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: theme.palette.primary.main }}
          >
            Save changes
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
