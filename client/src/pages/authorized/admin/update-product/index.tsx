import React, { useEffect, useState } from 'react';
import {
  Box,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import API from '../../../../services/api-service';
import StyledHeader from '../../../../components/styled-components/main-header';
import UpdateFormComponent from './update-item-form';
import { Garment } from '../../../../types';

const UpdateProduct: React.FC = () => {
  const { id } = useParams();
  const [garmentData, setData] = useState<Garment>();

  useEffect(() => {
    (async () => {
      if (id === undefined) { return null; }
      const fetchedData = await API.getGarment(id);
      if (typeof fetchedData === 'string') { return null; }
      return setData(fetchedData);
    })();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StyledHeader>update product</StyledHeader>
      {garmentData !== undefined
        ? <UpdateFormComponent {...garmentData} />
        : null}
    </Box>
  );
};

export default UpdateProduct;
