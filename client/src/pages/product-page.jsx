import React from 'react';
import {
  Box, Typography, useTheme, styled, Grid, InputLabel, MenuItem, FormControl, Select, Button,
} from '@mui/material';

const ProductPage = () => {
  const theme = useTheme();

  const images = [
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262820488_4623068701113268_3692456574835045560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PxOG6n91ddwAX83GZg8&_nc_ht=scontent.fvno1-1.fna&oh=00_AT8I5Tg__tWB2EBKOK0d-aQ_cvOKziE5nYS2KFv3dLafoA&oe=61EBD601',
      title: 'dress1',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262572593_4623068711113267_5741378821227030688_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XUcyFsOUGyMAX-bQSz6&_nc_ht=scontent.fvno1-1.fna&oh=00_AT81aWDpeGxd_6ACV8nnVQTfDGzAvZ1wldiX6Xa-IC8LaA&oe=61EB35DA',
      title: 'dress2',
    },
  ];

  const StyledHeader = styled(Typography)({
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontWeight: 350,
    textDecoration: 'none',
  });

  const StyledInfo = styled(Typography)({
    color: theme.palette.primary.dark,
    fontSize: '1.05rem',
    marginBottom: 90,
    marginTop: 20,
  });

  const StyledGridContainer = styled(Grid)({
    [theme.breakpoints.up('xs')]: {
      paddingInline: 35,
      marginBlock: 40,
    },
    [theme.breakpoints.up('sm')]: {
      width: 600,
      paddingInline: 45,
      marginBlock: 40,
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      direction: 'row',
      paddingInline: 55,
      marginBlock: 40,
    },
    [theme.breakpoints.up('lg')]: {
      width: 1200,
      direction: 'row',
      paddingInline: 55,
      marginBlock: 40,
    },
  });

  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <StyledGridContainer container columnSpacing={2}>
        <Grid item xs={12} md={6} sx={{ paddingRight: { md: 20 } }}>
          <Box
            component="img"
            width="100%"
            src={images[0].img}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <StyledHeader fontSize="2rem">{images[0].title}</StyledHeader>
            <StyledHeader fontSize="1.5rem">250 €</StyledHeader>
            <StyledInfo>Model 1.78m is wearing size M</StyledInfo>
            <FormControl fullWidth sx={{ mt: 12, mb: 10, width: { md: 300 } }}>
              <InputLabel id="size">Size</InputLabel>
              <Select
                labelId="size"
                id="size-select"
                value={size}
                label="Size"
                onChange={handleChange}
              >
                <MenuItem value="s">S (EU-36)</MenuItem>
                <MenuItem value="m">M (EU-38)</MenuItem>
                <MenuItem value="l">L (EU-40)</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="secondary" fullWidth sx={{ display: 'block', mb: 5, width: { md: 300 } }}>Add to Cart</Button>
          </Box>
        </Grid>
      </StyledGridContainer>
    </Box>
  );
};

export default ProductPage;
