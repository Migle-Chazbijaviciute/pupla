import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  styled,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
  Drawer,
  IconButton,
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import API from '../../services/api-service';
import { Category, Color, Size } from '../../types';

type Options = {
  filterName: string,
  options: Color[] | Size[] | Category[],
};

type ProductsDrawerStateProps = Array<Options>;

const ProductsDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<ProductsDrawerStateProps>([]);

  useEffect(() => {
    (async () => {
      const [color, size, category] = await Promise.all([
        API.getColors(),
        API.getSizes(),
        API.getCategories(),
      ]);
      if (typeof color !== 'string' && typeof size !== 'string' && typeof category !== 'string') {
        setFilters([
          { filterName: 'Color', options: color },
          { filterName: 'Size', options: size },
          { filterName: 'Category', options: category },
        ]);
      }
    })();
  }, []);

  const StyledDrawer = styled(Drawer)({
    '.MuiDrawer-paper': {
      width: 200,
    },
  });

  const toggleDrawer = () => {
    setOpen(!open);
  };
  if (!filters) return null;

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
          {filters.map(({ filterName, options }) => (
            <Box key={filterName}>
              <FormLabel component="legend">{filterName}</FormLabel>
              <FormGroup>
                {options.map(({ id, title }) => (
                  <FormControlLabel
                    key={id}
                    control={<Checkbox name={title} />}
                    label={title}
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
