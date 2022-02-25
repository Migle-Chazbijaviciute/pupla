import React, { useEffect } from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import API from '../../../../../services/api-service';

const CategorySelect = ({ ...props }) => {
  const [fetchedCategories, setFetchedCategories] = React.useState();

  useEffect(() => {
    (async () => {
      const { category } = await API.getCategories();
      setFetchedCategories(category);
    })();
  }, []);

  if (fetchedCategories === undefined) return null;

  return (
    <FormControl fullWidth>
      <InputLabel id="category">Category</InputLabel>
      <Select
        labelId="category"
        label="Category"
        {...props}
      >
        {fetchedCategories.map(({ id, title }) => (
          <MenuItem
            key={id}
            value={id}
          >
            {title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CategorySelect;
