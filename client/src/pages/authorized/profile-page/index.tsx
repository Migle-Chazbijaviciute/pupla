import React, { useMemo } from 'react';
import {
  TextField,
  Grid,
  Box,
  Button,
  Typography,
  useTheme,
  FormHelperText,
  TextFieldProps,
} from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import AuthService from '../../../services/auth-service';
import ProfileService from '../../../services/profile-service';
import { userSelector } from '../../../store/auth';
import CountrySelect from '../../../components/select-components/country-select';
import StyledHeader from '../../../components/styled-components/main-header';
import { UserProfile } from '../../../types';

type InitUser = UserProfile & {
  emailChecked: boolean,
  emailAvailable: boolean,
};

type FormikOnSubmit =
  (values: InitUser, formikHelpers: FormikHelpers<InitUser>) => void | Promise<void>;

const validationSchema = yup.object({
  name: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  surname: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  email: yup.string()
    .required('Is required')
    .email('Is not valid email')
    .test('email-validator', 'Email unavailable', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;

      return emailAvailable;
    }),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
  phoneNumber: yup.string()
    .required('Enter your phone number')
    .matches(/^[0-9]+$/, 'Phone number must be only digits')
    .min(8, 'Phone number must be at least 8 symbols')
    .max(15, 'Phone number can not be longer than 15 symbols'),
  address: yup.string()
    .required('Enter your shipping address')
    .min(2, 'Address must be at least 2 symbols')
    .max(50, 'Address can not be longer than 50 symbols'),
  city: yup.string()
    .required('Enter city')
    .min(2, 'City must be at least 2 symbols')
    .max(50, 'City can not be longer than 32 symbols'),
  zipcode: yup.string()
    .required('Enter your zipcode')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be 5 symbols')
    .max(5, 'Must be 5 symbols'),
  country: yup.string().required('Select country'),
});

const ProfilePage = () => {
  const user = useSelector(userSelector);
  const theme = useTheme();

  const initialValues = useMemo(() => ({
    name: user ? user.name : '',
    surname: user ? user.surname : '',
    email: user ? user.email : '',
    emailChecked: true,
    emailAvailable: true,
    phoneNumber: user ? user.phoneNumber : '',
    country: user ? user.country : '',
    address: user ? user.address : '',
    city: user ? user.city : '',
    zipcode: user ? user.zipcode : '',
  }), [user]);

  const onSubmit: FormikOnSubmit = async ({
    name,
    surname,
    email,
    phoneNumber,
    country,
    address,
    city,
    zipcode,
  }) => {
    await ProfileService.updateUserData({
      name,
      surname,
      email,
      phoneNumber,
      country,
      address,
      city,
      zipcode,
    });
  };

  const {
    values, errors, touched, isSubmitting, dirty, isValid,
    handleChange, handleBlur, setValues, setFieldValue, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const handleEmailChange: TextFieldProps['onChange'] = (e) => {
    if (values.emailChecked) {
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false,
      }, true);
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur: TextFieldProps['onBlur'] = (e) => {
    if (e.target.value === initialValues.email) {
      setValues({
        ...values,
        email: initialValues.email,
        emailChecked: true,
        emailAvailable: true,
      }, true);
      return;
    }
    handleBlur(e);
    if (!errors.email) {
      (async () => {
        try {
          const emailAvailable = await AuthService.checkEmail(values.email);
          setFieldValue('emailAvailable', emailAvailable);
        } catch (error) {
          setFieldValue('emailAvailable', false);
        } finally {
          setFieldValue('emailChecked', true, true);
        }
      })();
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mx: { xs: 20, sm: 'auto' },
        maxWidth: 500,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <StyledHeader>PROFILE</StyledHeader>
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            type="name"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="surname"
            variant="outlined"
            label="Surname"
            type="surname"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            error={touched.surname && Boolean(errors.surname)}
            helperText={touched.surname && errors.surname}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="phoneNumber"
            variant="outlined"
            label="Phone Number"
            type="phoneNumber"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Typography>Shipping Information :</Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <CountrySelect
            name="country"
            id="country"
            label="Country"
            type="select"
            fullWidth
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.country && Boolean(errors.country)}
            disabled={isSubmitting}
          />
          <FormHelperText sx={{ color: 'red', ml: 5 }}>{touched.country && errors.country}</FormHelperText>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="address"
            variant="outlined"
            label="Address"
            type="address"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            error={touched.address && Boolean(errors.address)}
            helperText={touched.address && errors.address}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="city"
            variant="outlined"
            label="City"
            type="city"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            error={touched.city && Boolean(errors.city)}
            helperText={touched.city && errors.city}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="zipcode"
            variant="outlined"
            label="Zipcode"
            type="zipcode"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.zipcode}
            error={touched.zipcode && Boolean(errors.zipcode)}
            helperText={touched.zipcode && errors.zipcode}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Button
            type="submit"
            disabled={!dirty || !isValid}
            variant="contained"
            fullWidth
            sx={{ backgroundColor: theme.palette.primary.main }}
          >
            Save changes
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
