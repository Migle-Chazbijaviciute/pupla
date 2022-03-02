import React, { useEffect, useState } from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import API from '../../services/api-service';
import { SelectComponentProps, Category } from '../../types';

const CategorySelect: React.FC<SelectComponentProps> = ({ ...props }) => {
  const [fetchedCategories, setFetchedCategories] = useState<Category[]>();

  useEffect(() => {
    (async () => {
      const response = await API.getCategories();
      if (typeof response !== 'string') {
        setFetchedCategories(response);
      }
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
