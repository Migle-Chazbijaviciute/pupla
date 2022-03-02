import React from 'react';
import {
  TextField,
  Grid,
  Button,
  styled,
  FormHelperText,
  TextFieldProps,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/authorization-form';
import routes from '../../routing/routes';
import { login } from '../../store/auth';
import AuthService from '../../services/auth-service';
import StyledHeader from '../../components/styled-components/main-header';
import CountrySelect from '../../components/select-components/country-select';
import InitialRegistration from '../../types/initial-registration';

type FormikOnSubmit =
  (
    values: InitialRegistration,
    formikHelpers: FormikHelpers<InitialRegistration>
  ) => void | Promise<void>;

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const validationSchema = yup.object({
  name: yup.string()
    .required('Enter your name')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  surname: yup.string()
    .required('Enter your surname')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  email: yup.string()
    .required('Enter your email')
    .email('Email is not valid')
    .test('email-validator', 'Email unavailable', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;

      return emailAvailable;
    }),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
  password: yup.string()
    .required('Enter your password')
    .min(6, 'At least 6 symbols')
    .max(32, 'Most 32 symbols')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Atleast one capital letter')
    .matches(/^.*\d+.*$/, 'Atleast one number'),
  repeatPassword: yup.string()
    .required('Repeat your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  phoneNumber: yup.string()
    .required('Enter your mobile number')
    .matches(/^[0-9]+$/, 'Phone number must be only digits')
    .min(8)
    .max(15),
  address: yup.string()
    .required('Enter your shipping address')
    .min(2)
    .max(32),
  city: yup.string()
    .required('Enter city')
    .min(2)
    .max(50),
  zipcode: yup.string()
    .required('Enter your zipcode')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be 5 symbols')
    .max(5, 'Must be 5 symbols'),
  country: yup.string().required('Select country'),
});

const initialValues: InitialRegistration = {
  name: '',
  surname: '',
  phoneNumber: '',
  country: '',
  address: '',
  city: '',
  zipcode: '',
  email: '',
  password: '',
  repeatPassword: '',
  emailChecked: false,
  emailAvailable: false,
};

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit: FormikOnSubmit = async ({
    name,
    surname,
    phoneNumber,
    country,
    address,
    city,
    zipcode,
    email,
    password,
    repeatPassword,
  }) => {
    const user = await AuthService.register({
      name,
      surname,
      phoneNumber,
      country,
      address,
      city,
      zipcode,
      email,
      password,
      repeatPassword,
    });
    if (typeof user === 'string') {
      console.log(user);
    } else {
      dispatch(login({ user }));
    }
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    isSubmitting,
    isValid,
    dirty,
    setFieldValue,
    setValues,
  } = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit,
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
    <AuthForm
      linkTo={routes.LoginPage}
      linkTitle="Already have an account? Login!"
      loading={isSubmitting}
      isValid={isValid && dirty}
      onSubmit={handleSubmit}
    >
      <StyledHeader>REGISTER</StyledHeader>
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
          <CountrySelect
            name="country"
            type="country"
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
            name="password"
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="repeatPassword"
            variant="outlined"
            label="Repeat Password"
            type="password"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.repeatPassword}
            error={touched.repeatPassword && Boolean(errors.repeatPassword)}
            helperText={touched.repeatPassword && errors.repeatPassword}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <StyledSubmitButton
            type="submit"
            disabled={!isValid}
            variant="contained"
            fullWidth
          >
            Register
          </StyledSubmitButton>
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default RegisterPage;
