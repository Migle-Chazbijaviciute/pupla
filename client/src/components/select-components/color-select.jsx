import React, { useEffect } from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import API from '../../services/api-service';

const ColorSelect = ({ ...props }) => {
  const [fetchedColors, setFetchedColors] = React.useState();

  useEffect(() => {
    (async () => {
      const { color } = await API.getColors();
      setFetchedColors(color);
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
