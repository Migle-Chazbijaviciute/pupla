import React, { useEffect, useState } from 'react';
import {
  Box,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import API from '../../../../services/api-service';
import StyledHeader from '../../../../components/styled-components/main-header';
import UpdateFormComponent from './update-item-form';

const UpdateProduct = () => {
  const { id } = useParams();
  const [garmentData, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const fetchedData = await API.getGarment(id);
      setData(fetchedData);
    })();
  }, []);

  if (garmentData === null) return null;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StyledHeader>update product</StyledHeader>
      <UpdateFormComponent {...garmentData} />
    </Box>
  );
};

export default UpdateProduct;
