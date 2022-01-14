import React from 'react';
import {
  BrowserRouter as RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import StandartLayout from './components/layouts/standart-layout';
import DashboardLayout from './components/layouts/dashboard-layout';
import { lightTheme } from './styles/theme';
import DashboardPage from './pages/dashboard-page';
import HomePage from './pages/home-page';
import InformationPage from './pages/information-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import ProductsPage from './pages/products-page';
import ProductPage from './pages/product-page';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline>
      <RouterProvider>
        <Routes>
          <Route path="/" element={<StandartLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/information" element={<InformationPage />} />
          </Route>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </RouterProvider>
    </CssBaseline>
  </ThemeProvider>
);

export default App;
