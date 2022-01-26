import React from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';

const ProductsSort = () => {
  const [sort, setSort] = React.useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
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
  );
};

export default ProductsSort;
