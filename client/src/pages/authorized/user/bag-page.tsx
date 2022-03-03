import React, { useEffect } from 'react';
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
  SelectChangeEvent,
} from '@mui/material';
import ProductCard from '../../products-page/product-card';
import StyledHeader from '../../../components/styled-components/main-header';
import StyledGridContainer from '../../../components/styled-components/grid-container';
import API from '../../../services/api-service';
import { Garment } from '../../../types';

type HandleChange = (event: SelectChangeEvent) => void;

const TotalCont = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
}));

const BagPage = () => {
  const [size, setSize] = React.useState('');
  const [qnt, setQnt] = React.useState('1');
  const [products, setProducts] = React.useState<Garment[]>([]);

  const handleChange: HandleChange = (event) => {
    setSize(event.target.value);
  };

  const handleChange2: HandleChange = (event) => {
    setQnt(event.target.value);
  };

  useEffect(() => {
    (async () => {
      const prod = await API.getGarments();
      if (typeof prod !== 'string') {
        setProducts(prod);
      }
    })();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <StyledHeader>MY BAG</StyledHeader>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledGridContainer width="90%" container direction="row">
          {products.length > 0 && products[0].images !== undefined ? (
            <>
              <Grid item xs={12}>
                {products.map((item) => (
                  <Box key={item.id}>
                    <List>
                      <ListItem>
                        <Box sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', md: 'row' },
                          alignItems: 'center',
                          justifyContent: { xs: 'center', md: 'space-around' },
                        }}
                        >
                          <ProductCard
                            {...item}
                            deleteIcon
                            sx={{
                              width: '100%',
                              height: 'auto',
                            }}
                          />
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <FormControl
                              fullWidth
                              sx={{
                                mb: 10,
                                width: { xs: 200, sm: 300, md: 400 },
                              }}
                            >
                              <InputLabel id="size">SIZE</InputLabel>
                              <Select
                                labelId="size"
                                label="Size"
                                value={size}
                                onChange={handleChange}
                              >
                                <MenuItem value="s">S (EU-36)</MenuItem>
                                <MenuItem value="m">M (EU-38)</MenuItem>
                                <MenuItem value="l">L (EU-40)</MenuItem>
                              </Select>
                            </FormControl>
                            <FormControl
                              fullWidth
                              sx={{
                                mb: 10,
                                width: { xs: 200, sm: 300, md: 400 },
                              }}
                            >
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
                    <Divider />
                  </Box>
                ))}
              </Grid>
              <TotalCont
                item
                xs={12}
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
