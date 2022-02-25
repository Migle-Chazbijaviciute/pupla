import React, { useState, /* useEffect, */ useRef } from 'react';
import {
  Box,
  Grid,
  Button,
  Typography,
  TextField,
  Checkbox,
  FormHelperText,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import API from '../../../../services/api-service';
import StyledGridContainer from '../../../../components/styled-components/grid-container';
import ProductFormContainer from './product-form-container';
import ColorSelect from './select-components/color-select';
import CategorySelect from './select-components/category-select';
import SizesSelect from './select-components/sizes-select';
import ImageService from '../../../../services/image-service';
import ImagesGrid from './images/images-grid';

const validationSchema = yup.object({
  label: yup.string()
    .required('Enter the label')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  color: yup.string().required('Select color'),
  category: yup.string().required('Select category'),
  sizes: yup.array().min(2, 'At least two sizes').required('Select sizes'),
  price: yup.string()
    .required('Enter price')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(2, 'Must be minimum 2 symbols')
    .max(3, 'Must be maximum 3 symbols'),
  images: yup.array().min(3, 'Must upload 3 images').max(3, 'Must upload maximum 3 images').required('Select images'),
});

const initialValues = {
  label: '',
  color: '',
  category: '',
  price: '',
  sizes: [],
  limitedEdition: false,
  inStock: true,
  images: [],
};

const ProductDescription = () => {
  const [imgData, setImgData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const fetchedImgData = await ImageService.getImages();
  //     setImgData(fetchedImgData);
  //   })();
  // }, []);

  const fileUploadRef = useRef(null);

  const handleUploadFiles = () => {
    fileUploadRef.current.click();
  };

  const onSubmit = async ({
    label, color, category, price, sizes, images, limitedEdition, inStock,
  }, { resetForm }) => {
    await API.createGarment({
      label, color, category, price, sizes, images, limitedEdition, inStock,
    });
    resetForm();
    setImgData([]);
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldTouched,
    errors,
    touched,
    values,
    isSubmitting,
    isValid,
    dirty,
    setFieldValue,
  } = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  const updateImgData = (newImgData) => {
    const imgId = newImgData.map((img) => img.id);
    setFieldValue('images', imgId);
    setImgData([...imgData, ...newImgData]);
  };

  const handleImagesLoaded = async () => {
    const input = fileUploadRef.current;
    if (input.files.length === 3) {
      const data = await ImageService.uploadImages(input.files);
      updateImgData(data);
    } else {
      setFieldTouched('images', true, true);
    }
  };

  const handleImageDelete = async (id) => {
    await ImageService.deleteImage(id);
    setImgData(imgData.filter((x) => x.id !== id));
    setFieldValue(values.images.filter((x) => x.id !== id));
  };

  return (
    <ProductFormContainer
      onSubmit={handleSubmit}
      isValid={isValid && dirty}
      loading={isSubmitting}
    >
      <StyledGridContainer container>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="label"
            variant="outlined"
            label="Label"
            type="label"
            fullWidth
            onChange={handleChange}
            value={values.label}
            onBlur={handleBlur}
            error={touched.label && Boolean(errors.label)}
            helperText={touched.label && errors.label}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="price"
            variant="outlined"
            label="Price"
            type="text"
            fullWidth
            onChange={handleChange}
            value={values.price}
            onBlur={handleBlur}
            error={touched.price && Boolean(errors.price)}
            helperText={touched.price && errors.price}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <CategorySelect
            name="category"
            type="category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.category && Boolean(errors.category)}
            disabled={isSubmitting}
          />
          <FormHelperText sx={{ color: 'red', ml: 5 }}>{touched.category && errors.category}</FormHelperText>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <ColorSelect
            name="color"
            type="color"
            value={values.color}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.color && Boolean(errors.color)}
            disabled={isSubmitting}
          />
          <FormHelperText sx={{ color: 'red', ml: 5 }}>{touched.color && errors.color}</FormHelperText>
        </Grid>
        <Grid item xs={12} sx={{ mb: 3 }}>
          <SizesSelect
            name="sizes"
            type="sizes"
            value={values.sizes}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.sizes && Boolean(errors.sizes)}
            disabled={isSubmitting}
          />
          <FormHelperText sx={{ color: 'red', ml: 5 }}>{touched.sizes && errors.sizes}</FormHelperText>
        </Grid>
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Typography>Limited Edition</Typography>
          <Checkbox
            name="limitedEdition"
            checked={values.limitedEdition}
            onChange={() => setFieldValue('limitedEdition', !values.limitedEdition)}
          />
          <Typography>In Stock</Typography>
          <Checkbox
            name="inStock"
            checked={values.inStock}
            onChange={() => setFieldValue('inStock', !values.inStock)}
          />
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
              name="images"
              type="file"
              hidden
              ref={fileUploadRef}
              accept=".jpg, .jpeg, .png"
              multiple
              onChange={handleImagesLoaded}
            />
            <FormHelperText sx={{ color: 'red', ml: 5 }}>{touched.images && errors.images}</FormHelperText>
          </Box>
          <Box sx={{ alignItems: 'flex-start' }}>
            {
      imgData.length > 0
        ? <ImagesGrid data={imgData} handleImageDelete={handleImageDelete} /> : null
    }
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            disabled={!isValid}
            variant="contained"
            fullWidth
          >
            ADD NEW PRODUCT NOW
          </Button>
        </Grid>
      </StyledGridContainer>
    </ProductFormContainer>
  );
};

export default ProductDescription;
