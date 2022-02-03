import React from 'react';
import {
  Grid,
  useTheme,
  styled,
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../products-page/product-card';

const BagPage = () => {
  const theme = useTheme();
  const [size, setSize] = React.useState('');
  const [qnt, setQnt] = React.useState('1');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleChange2 = (event) => {
    setQnt(event.target.value);
  };

  const saved = [
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/265956465_4656109194475885_3426648355086172265_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=NB4L67TgzQ0AX_fS6fC&_nc_ht=scontent.fvno1-1.fna&oh=00_AT-aL24ec3IUbaK9TSxCu0vH_7xRiGEKGG9Mhmg1B0Q9Mg&oe=61FF7400',
      title: 'limited1',
      price: 50,
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262820488_4623068701113268_3692456574835045560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3RMTjWpkwmUAX973Gh0&_nc_ht=scontent.fvno1-1.fna&oh=00_AT-BpL2RiToFnhEQ_CFQXBeclsMxs5P6K9Jm77maW2q0WQ&oe=61FF9C81',
      title: 'limited2',
      price: 50,
    },
  ];

  const StyledHeader = styled(Typography)({
    color: theme.palette.secondary.dark,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '2em',
    textDecoration: 'none',
    marginBottom: 20,
    marginTop: 20,
  });

  const StyledGridContainer = styled(Grid)({
    backgroundColor: theme.palette.secondary.main,
    '.MuiGrid-root.MuiGrid-item': {
      paddingTop: 0,
      paddingLeft: 0,
      padding: 8,
    },
    [theme.breakpoints.up('xs')]: {
      paddingInline: 30,
      marginBottom: 10,
      paddingBlock: 10,
    },
    [theme.breakpoints.up('md')]: {
      paddingBlock: 10,
      marginBottom: 25,
    },
  });

  const TotalCont = styled(Grid)({
    backgroundColor: theme.palette.secondary.light,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <StyledHeader>MY BAG</StyledHeader>
      <Box>
        <StyledGridContainer container direction="row">
          <Grid item xs={12} md={9}>
            {saved.length > 0 ? saved.map((item) => (
              <List key={uuidv4()}>
                <ListItem>
                  <Box sx={{
                    display: { xs: 'block', sm: 'flex' },
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                  >
                    <ProductCard {...item} deleteIcon />
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}
                    >
                      <FormControl fullWidth sx={{ mt: 12, mb: 10, width: { sm: 200 } }}>
                        <InputLabel id="size">SIZE</InputLabel>
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
                      <FormControl fullWidth sx={{ mb: 10, width: { sm: 200 } }}>
                        <InputLabel id="qnt">QUANTITY</InputLabel>
                        <Select
                          labelId="qnt"
                          id="qnt-select"
                          value={qnt}
                          label="Quantity"
                          onChange={handleChange2}
                        >
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="5">5</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </ListItem>
              </List>
            ))
              : <Box fontSize={22}>THERE IS NO ITEMS IN YOUR BAG YET...</Box>}
          </Grid>
          <TotalCont
            item
            xs={12}
            md={3}
          >
            <Typography sx={{
              fontSize: 25,
              padding: 8,
            }}
            >
              TOTAL:
            </Typography>
            <Divider orientation="horizontal" variant="middle" />
            <Typography sx={{
              fontSize: 22,
              padding: 2,
            }}
            >
              Sub-total: 180€
            </Typography>
            <Typography sx={{
              fontSize: 22,
              padding: 2,
            }}
            >
              Delivery: free
            </Typography>
            <Button variant="outlined" fullWidth sx={{ my: 5 }}>CHECKOUT</Button>
            <Typography sx={{
              fontSize: 15,
              padding: 2,
            }}
            >
              Got a discount? Add it in the next step.
            </Typography>
          </TotalCont>
        </StyledGridContainer>
      </Box>
    </Box>
  );
};

export default BagPage;
