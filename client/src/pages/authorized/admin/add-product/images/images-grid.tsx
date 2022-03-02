import React from 'react';
import {
  Grid,
  Fab,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

type SingleImage = {
  id: string,
  src: string,
};

type ImagesGridProps = {
  data: Array<SingleImage>,
  handleImageDelete: (e: string) => void,
};

const ImagesGrid: React.FC<ImagesGridProps> = ({ data, handleImageDelete }) => (
  <Grid container sx={{ gap: 2, flexGrow: 1 }}>
    {
      data.map(({ id, src }) => (
        <Grid item key={id} position="relative">
          <img
            src={src}
            alt={src}
            style={{ width: 200 }}
          />
          {handleImageDelete && (
            <Fab
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                height: 22,
                minHeight: 22,
                width: 22,
                borderRadius: 0,
                bgcolor: 'error.main',
                color: 'common.white',
              }}
              onClick={() => handleImageDelete(id)}
            >
              <ClearIcon fontSize="small" />
            </Fab>
          )}
        </Grid>
      ))
    }
  </Grid>
);

export default ImagesGrid;
