import React, { useEffect, useState } from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import API from '../../services/api-service';
import { SelectComponentProps, Color } from '../../types';

const ColorSelect: React.FC<SelectComponentProps> = ({ ...props }) => {
  const [fetchedColors, setFetchedColors] = useState<Color[]>();

  useEffect(() => {
    (async () => {
      const responseData = await API.getColors();
      if (typeof responseData !== 'string') {
        setFetchedColors(responseData);
      }
    })();
  }, []);

  if (fetchedColors === undefined) return null;
  return (
    <FormControl fullWidth>
      <InputLabel id="color">Color</InputLabel>
      <Select
        labelId="color"
        label="Color"
        {...props}
      >
        {fetchedColors.map(({ id, title }) => (
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
export default ColorSelect;
