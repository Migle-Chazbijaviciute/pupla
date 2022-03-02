import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Alert,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
import AuthForm from '../../components/authorization-form';
import routes from '../../routing/routes';
import { login } from '../../store/auth';
import AuthService from '../../services/auth-service';
import StyledHeader from '../../components/styled-components/main-header';
import { StyledSubmitButton } from './register-page';

type InitValues = {
  email: string,
  password: string,
};

type FormikOnSubmit =
  (values: InitValues, formikHelpers: FormikHelpers<InitValues>) => void | Promise<void>;

const validationSchema = yup.object({
  email: yup.string()
    .required('Is required')
    .email('Is not valid email'),
  password: yup.string()
    .required('Is required'),
});

const initialValues: InitValues = {
  email: '',
  password: '',
};

const LoginPage: React.FC = () => {
  const [urlSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: FormikOnSubmit = async ({ email, password }) => {
    setError(null);
    const user = await AuthService.login({
      email,
      password,
    });
    if (typeof user === 'string') {
      setError(user);

      return;
    }

    const redirectTo = urlSearchParams.get('redirectTo') ?? undefined;
    const loginSuccessAction = login({
      user,
      redirectTo,
    });
    dispatch(loginSuccessAction);
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
          <StyledSubmitButton
            disabled={!isValid}
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </StyledSubmitButton>
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default LoginPage;
