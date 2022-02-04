import React from 'react';
import {
  TextField,
  Grid,
  Button,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/authorization-form';
import routes from '../../routing/routes';
import { login } from '../../store/auth';
import AuthService from '../../services/auth-service';
import StyledHeader from '../../components/styled-components/main-header';

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
  password: yup.string()
    .required('Is required')
    .min(6, 'At least 6 symbols')
    .max(32, 'Most 32 symbols')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Atleast one capital letter')
    .matches(/^.*\d+.*$/, 'Atleast one number'),
  passwordConfirmation: yup.string()
    .required('Is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  subscribed: true,
  emailChecked: false,
  emailAvailable: false,
};

const RegisterPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const onSubmit = async ({
    email, name, surname, password, passwordConfirmation,
  }) => {
    const user = await AuthService.register({
      email,
      name,
      surname,
      password,
      repeatPassword: passwordConfirmation,
    });
    dispatch(login({ user }));
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

  const handleEmailChange = (e) => {
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

  const handleEmailBlur = (e) => {
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
          <Button
            disabled={!isValid}
            variant="contained"
            fullWidth
            sx={{ backgroundColor: theme.palette.primary.main }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default RegisterPage;
