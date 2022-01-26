import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Grid,
  useTheme,
  styled,
  Checkbox,
  Link,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const ProductsGrid = () => {
  const theme = useTheme();

  const itemData = [
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262820488_4623068701113268_3692456574835045560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PxOG6n91ddwAX83GZg8&_nc_ht=scontent.fvno1-1.fna&oh=00_AT8I5Tg__tWB2EBKOK0d-aQ_cvOKziE5nYS2KFv3dLafoA&oe=61EBD601',
      title: 'limited1',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262572593_4623068711113267_5741378821227030688_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XUcyFsOUGyMAX-bQSz6&_nc_ht=scontent.fvno1-1.fna&oh=00_AT81aWDpeGxd_6ACV8nnVQTfDGzAvZ1wldiX6Xa-IC8LaA&oe=61EB35DA',
      title: 'limited2',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/261766297_4621107807976024_3560666404319759911_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bvQLTCR5AkEAX9yqIr2&_nc_ht=scontent.fvno1-1.fna&oh=00_AT_-xUq39pPu4ppo4a5NcBV7_pvmZUxu4ruiK-sSCUX3Kw&oe=61EB22A8',
      title: 'limited3',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262912268_4621107824642689_6315757410842768446_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_ok9OJ5M_CEAX_vi2AO&_nc_ht=scontent.fvno1-1.fna&oh=00_AT_-rGtxOZoX_FjQP9Gt1xKyYzrFViQRviwaR4Yb89zAOQ&oe=61EB8E64',
      title: 'limited4',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262820488_4623068701113268_3692456574835045560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PxOG6n91ddwAX83GZg8&_nc_ht=scontent.fvno1-1.fna&oh=00_AT8I5Tg__tWB2EBKOK0d-aQ_cvOKziE5nYS2KFv3dLafoA&oe=61EBD601',
      title: 'limited1',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262572593_4623068711113267_5741378821227030688_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XUcyFsOUGyMAX-bQSz6&_nc_ht=scontent.fvno1-1.fna&oh=00_AT81aWDpeGxd_6ACV8nnVQTfDGzAvZ1wldiX6Xa-IC8LaA&oe=61EB35DA',
      title: 'limited2',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/261766297_4621107807976024_3560666404319759911_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bvQLTCR5AkEAX9yqIr2&_nc_ht=scontent.fvno1-1.fna&oh=00_AT_-xUq39pPu4ppo4a5NcBV7_pvmZUxu4ruiK-sSCUX3Kw&oe=61EB22A8',
      title: 'limited3',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262912268_4621107824642689_6315757410842768446_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_ok9OJ5M_CEAX_vi2AO&_nc_ht=scontent.fvno1-1.fna&oh=00_AT_-rGtxOZoX_FjQP9Gt1xKyYzrFViQRviwaR4Yb89zAOQ&oe=61EB8E64',
      title: 'limited4',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262820488_4623068701113268_3692456574835045560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PxOG6n91ddwAX83GZg8&_nc_ht=scontent.fvno1-1.fna&oh=00_AT8I5Tg__tWB2EBKOK0d-aQ_cvOKziE5nYS2KFv3dLafoA&oe=61EBD601',
      title: 'limited1',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262572593_4623068711113267_5741378821227030688_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XUcyFsOUGyMAX-bQSz6&_nc_ht=scontent.fvno1-1.fna&oh=00_AT81aWDpeGxd_6ACV8nnVQTfDGzAvZ1wldiX6Xa-IC8LaA&oe=61EB35DA',
      title: 'limited2',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/261766297_4621107807976024_3560666404319759911_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=bvQLTCR5AkEAX9yqIr2&_nc_ht=scontent.fvno1-1.fna&oh=00_AT_-xUq39pPu4ppo4a5NcBV7_pvmZUxu4ruiK-sSCUX3Kw&oe=61EB22A8',
      title: 'limited3',
    },
    {
      img: 'https://scontent.fvno1-1.fna.fbcdn.net/v/t39.30808-6/262912268_4621107824642689_6315757410842768446_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_ok9OJ5M_CEAX_vi2AO&_nc_ht=scontent.fvno1-1.fna&oh=00_AT_-rGtxOZoX_FjQP9Gt1xKyYzrFViQRviwaR4Yb89zAOQ&oe=61EB8E64',
      title: 'limited4',
    },
  ];

  const StyledGridContainer = styled(Grid)({
    backgroundColor: theme.palette.secondary.main,
    '.MuiGrid-root.MuiGrid-item': {
      paddingTop: 0,
      paddingLeft: 0,
      padding: 8,
    },
    [theme.breakpoints.up('xs')]: {
      paddingInline: 30,
      marginBottom: 10,
      paddingBlock: 10,
    },
    [theme.breakpoints.up('md')]: {
      paddingBlock: 10,
      marginBottom: 25,
    },
  });

  return (
    <StyledGridContainer container maxWidth="90%">
      {itemData.map(({ img, title }) => (
        <Grid item key={uuidv4()} xs={12} sm={6} md={4} xl={3} sx={{ position: 'relative' }}>
          <Link href="/product/1">
            <Box
              src={img}
              component="img"
              width="100%"
              alt={title}
              loading="lazy"
            />
          </Link>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            sx={{
              position: 'absolute', right: 0, top: 0,
            }}
            size="large"
          />
        </Grid>
      ))}
    </StyledGridContainer>
  );
};

export default ProductsGrid;
