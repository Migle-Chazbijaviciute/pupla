import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import ImageService from '../../../../../services/image-service';
import ImagesGrid from './images-grid';
import { Image } from '../../../../../types';

type ImagesComponentProps = {
  handleImageDelete: (id: string) => Promise<void>
};

export type UpdateImgData = (data: Image[]) => void;

const ImagesComponent: React.FC<ImagesComponentProps> = ({ handleImageDelete }) => {
  const [imgData, setImgData] = useState<Image[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedImgData = await ImageService.getImages();
      setImgData(fetchedImgData);
    })();
  }, []);

  const updateImgData: UpdateImgData = (newImgData) => {
    setImgData([...imgData, ...newImgData]);
  };

  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleUploadFiles = () => {
    if (fileUploadRef && fileUploadRef.current) {
      fileUploadRef.current.click();
    }
  };

  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    if (input && input.files) {
      const data = await ImageService.uploadImages(input.files);
      updateImgData(data);
    }
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
