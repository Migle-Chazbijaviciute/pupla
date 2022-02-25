import React from 'react';
import {
  Grid,
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
import ProductCard from '../../products-page/product-card';
import StyledHeader from '../../../components/styled-components/main-header';
import StyledGridContainer from '../../../components/styled-components/grid-container';

const TotalCont = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
}));

const BagPage = () => {
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
      img: '/static/stock/blackSet1.jpg',
      title: 'limited1',
      price: 50,
    },
    {
      img: 'static/stock/blackSet2.jpg',
      title: 'limited2',
      price: 50,
    },
  ];

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
          {saved.length > 0 && saved.img !== undefined ? (
            <>
              <Grid item xs={12} md={9}>
                {saved.map((item) => (
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
                ))}
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
            </>
          )
            : (
              <Box
                fontSize={22}
                sx={{ width: 500, height: 400 }}
              >
                THERE IS NO ITEMS IN YOUR BAG YET...
              </Box>
            )}

        </StyledGridContainer>
      </Box>
    </Box>
  );
};

export default BagPage;
