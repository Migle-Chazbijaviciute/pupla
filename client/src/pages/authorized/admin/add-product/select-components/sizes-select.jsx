import React, { useEffect } from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import API from '../../../../../services/api-service';

const SizesSelect = ({ ...props }) => {
  const [fetchedSizes, setFetchedSizes] = React.useState([]);

  useEffect(() => {
    (async () => {
      const { size } = await API.getSizes();
      setFetchedSizes(size);
    })();
  }, []);

  if (fetchedSizes === undefined) return null;

  return (
    <FormControl fullWidth>
      <InputLabel id="size">Sizes</InputLabel>
      <Select
        labelId="size"
        label="Sizes"
        multiple
        {...props}
      >
        {fetchedSizes.map(({ id, title }) => (
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
export default SizesSelect;
