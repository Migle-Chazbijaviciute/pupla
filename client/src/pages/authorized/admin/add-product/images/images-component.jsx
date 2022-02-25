import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import ImageService from '../../../../../services/image-service';
import ImagesGrid from './images-grid';

const ImagesComponent = ({ ...props }) => {
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedImgData = await ImageService.getImages();
      setImgData(fetchedImgData);
    })();
  }, []);

  const updateImgData = (newImgData) => {
    setImgData([...imgData, ...newImgData]);
  };

  const handleImageDelete = async (id) => {
    await ImageService.deleteImage(id);
    setImgData(imgData.filter((x) => x.id !== id));
  };

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
    <Box>
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
          {...props}
        />
      </Box>
      <Box sx={{ alignItems: 'flex-start' }}>
        {
      imgData.length > 0
        ? <ImagesGrid data={imgData} handleImageDelete={handleImageDelete} /> : null
    }
      </Box>
    </Box>
  );
};

export default ImagesComponent;
