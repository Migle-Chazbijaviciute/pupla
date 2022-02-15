import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

const colors = [
  { id: '1', title: 'white', value: 'white' },
  { id: '2', title: 'black', value: 'black' },
  { id: '3', title: 'grey', value: 'grey' },
  { id: '4', title: 'purple', value: 'purple' },
  { id: '5', title: 'nude', value: 'nude' },
];

const categories = [
  { id: '1', title: 'dress', value: 'dress' },
  { id: '2', title: 'set', value: 'set' },
  { id: '3', title: 'shirt', value: 'shirt' },
];

const ProductDescription = () => {
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Grid container maxWidth={500}>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <TextField
          name="label"
          variant="outlined"
          label="Label"
          type="label"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="color">Color</InputLabel>
          <Select
            labelId="color"
            label="Color"
            value={color}
            onChange={handleColorChange}
          >
            {colors.map(({ id, title, value }) => (
              <MenuItem
                key={id}
                value={value}
              >
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            label="Category"
            value={category}
            onChange={handleCategoryChange}
          >
            {categories.map(({ id, title, value }) => (
              <MenuItem
                key={id}
                value={value}
              >
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          type="price"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Typography>Size</Typography>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="S" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="M" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="L" />
        </FormGroup>
      </Grid>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Typography>Limited Edition</Typography>
        <Checkbox />
        <Typography>In Stock</Typography>
        <Checkbox />
      </Grid>
    </Grid>
  );
};

export default ProductDescription;
