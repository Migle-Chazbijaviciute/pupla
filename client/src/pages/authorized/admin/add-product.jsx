import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Grid,
  Button,
  Typography,
} from '@mui/material';
import StyledHeader from '../../../components/styled-components/main-header';
import StyledGridContainer from '../../../components/styled-components/grid-container';
import ProductDescription from './product-description';
import ImageService from '../../../services/image-service';
import ImagesGrid from './images-grid';

const AddProduct = () => {
  const [imgData, setImgData] = useState([]);

  const updateImgData = (newImgData) => {
    setImgData([...imgData, ...newImgData]);
  };

  const handleImageDelete = async (id) => {
    await ImageService.deleteImage(id);
    setImgData(imgData.filter((x) => x.id !== id));
  };

  useEffect(() => {
    (async () => {
      const fetchedImgData = await ImageService.getImages();
      setImgData(fetchedImgData);
    })();
  }, []);

  const fileUploadRef = useRef(null);

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    const data = await ImageService.uploadImages(input.files);
    updateImgData(data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StyledHeader>add product</StyledHeader>
      <StyledGridContainer container>
        <Grid item xs={12} md={4}>
          <ProductDescription />
        </Grid>
        <Grid item xs={12} md={8} minHeight={570}>
          <Box sx={{
            display: 'flex', justifyContent: 'space-between',
          }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>Images</Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{ textTransform: 'none' }}
              onClick={handleUploadFiles}
            >
              UPLOAD IMAGES
            </Button>
            <input
              type="file"
              hidden
              ref={fileUploadRef}
              accept=".jpg, .jpeg, .png"
              multiple
              onChange={handleImagesLoaded}
            />
          </Box>
          <Box sx={{ alignItems: 'flex-start' }}>
            {
            imgData.length > 0
              ? <ImagesGrid data={imgData} handleImageDelete={handleImageDelete} /> : null
          }
          </Box>
        </Grid>
        <Button variant="contained" fullWidth>ADD NEW PRODUCT NOW</Button>
      </StyledGridContainer>
    </Box>
  );
};

export default AddProduct;
