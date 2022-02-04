import React from 'react';
import {
  TextField,
  Grid,
  Button,
  Alert,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/authorization-form';
import routes from '../../routing/routes';
import { login } from '../../store/auth';
import AuthService from '../../services/auth-service';
import StyledHeader from '../../components/styled-components/main-header';

const validationSchema = yup.object({
  email: yup.string()
    .required('Is required')
    .email('Is not valid email'),
  password: yup.string()
    .required('Is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const theme = useTheme();
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [error, setError] = React.useState(null);

  const onSubmit = async ({ email, password }) => {
    setError(null);
    try {
      const user = await AuthService.login({
        email,
        password,
      });

      const redirectTo = urlSearchParams.get('redirectTo');
      const loginSuccessAction = login({
        user,
        redirectTo,
      });
      dispatch(loginSuccessAction);
    } catch (err) {
      setError(err.message);
    }
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthForm
      linkTo={routes.RegisterPage}
      linkTitle="Don't have an account? Come and join us!"
      loading={isSubmitting}
      isValid={isValid && dirty}
      onSubmit={handleSubmit}
    >
      <StyledHeader>LOGIN</StyledHeader>
      <Alert severity="error" sx={{ my: 2, visibility: error ? 'visible' : 'hidden' }}>
        {error}
      </Alert>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            name="email"
            variant="outlined"
            label="El. paštas"
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            autoComplete="email"
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            name="password"
            variant="outlined"
            label="Slaptažodis"
            type="password"
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            autoComplete="current-password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Button
            disabled={!isValid}
            variant="contained"
            fullWidth
            sx={{ backgroundColor: theme.palette.primary.main }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default LoginPage;
