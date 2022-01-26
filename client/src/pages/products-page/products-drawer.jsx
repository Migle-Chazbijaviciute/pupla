import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Typography,
  styled,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Drawer,
  Checkbox,
  IconButton,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const ProductsDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const StyledDrawer = styled(Drawer)({
    '.MuiDrawer-paper': {
      width: 200,
    },
  });

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

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
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
            <Box key={uuidv4()}>
              <FormLabel component="legend">{title}</FormLabel>
              <FormGroup>
                {options.map(({ name }) => (
                  <FormControlLabel
                    key={uuidv4()}
                    control={<Checkbox name={name} />}
                    label={name}

                  />
                ))}
              </FormGroup>
            </Box>
          ))}
        </FormControl>
      </StyledDrawer>
    </Box>
  );
};

export default ProductsDrawer;
