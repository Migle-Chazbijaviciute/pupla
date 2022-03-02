import React, { useEffect, useState } from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import API from '../../services/api-service';
import { SelectComponentProps, Size } from '../../types';

const SizesSelect: React.FC<SelectComponentProps> = ({ ...props }) => {
  const [fetchedSizes, setFetchedSizes] = useState<Size[]>();

  useEffect(() => {
    (async () => {
      const responseData = await API.getSizes();
      if (typeof responseData !== 'string') {
        setFetchedSizes(responseData);
      }
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
