import React from 'react';
import {
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  InputLabel,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Select,
  Drawer,
  IconButton,
  // Button,
  Checkbox,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const ProductsPage = () => {
  const [sort, setSort] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const filters = [
    {
      title: 'Color',
      options: [
        { name: 'Black' },
        { name: 'White' },
        { name: 'Grey' },
        { name: 'Nude' },
      ],
    },
    {
      title: 'Type',
      options: [
        { name: 'Shirt' },
        { name: 'Dress' },
        { name: 'Hoodie' },
      ],
    },
    {
      title: 'Size',
      options: [
        { name: 'S' },
        { name: 'M' },
        { name: 'L' },
      ],
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

  const StyledActions = styled(Box)({
    backgroundColor: theme.palette.secondary.main,
    width: '90%',
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    paddingInline: 38,
  });

  const StyledDrawer = styled(Drawer)({
    '.MuiDrawer-paper': {
      width: 200,
    },
  });

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <StyledHeader>products</StyledHeader>
      <StyledActions>
        <Box>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-label"
              value={sort}
              onChange={handleChange}
              label="Sort By"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="price_desc">Lowest Price</MenuItem>
              <MenuItem value="price_asc">Highest Price</MenuItem>
              <MenuItem value="time_desc">Newest</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <IconButton onClick={toggleDrawer} sx={{ height: 60 }}>
            <Typography sx={{ pr: 5 }}>FILTER</Typography>
            <FilterAltIcon />
          </IconButton>
          <StyledDrawer
            open={open}
            anchor="right"
            onClose={toggleDrawer}
          >
            <Typography sx={{ textAlign: 'center', mt: 10 }}>CHOOSE FILTERS</Typography>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              {filters.map(({ title, options }) => (
                <>
                  <FormLabel component="legend" key={title}>{title}</FormLabel>
                  <FormGroup>
                    {options.map(({ name }) => (
                      <FormControlLabel
                        control={<Checkbox name={name} />}
                        label={name}
                        key={name}
                      />
                    ))}
                  </FormGroup>
                </>
              ))}
            </FormControl>
          </StyledDrawer>
        </Box>
      </StyledActions>
      <StyledGridContainer container maxWidth="90%">
        {itemData.map(({ img, title }) => (
          <Grid item key={img} xs={12} md={6} lg={4} xl={3} sx={{ position: 'relative' }}>
            <Box
              src={`${img}?w=164&h=164&fit=crop&auto=format`}
              component="img"
              width="100%"
              alt={title}
              loading="lazy"
            />
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              sx={{
                position: 'absolute', right: 0, top: 0,
              }}
              size="large"
            />
          </Grid>
        ))}
      </StyledGridContainer>
    </Box>
  );
};

export default ProductsPage;
