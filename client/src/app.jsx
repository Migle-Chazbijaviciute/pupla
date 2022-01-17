import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import StandartLayout from './components/layouts/standart-layout';
import DashboardLayout from './components/layouts/dashboard-layout';
import theme from './styles/theme';
import ProfilePage from './pages/profile-page';
import CartPage from './pages/cart-page';
import HomePage from './pages/home-page';
import InformationPage from './pages/information-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import ProductsPage from './pages/products-page';
import ProductPage from './pages/product-page';
import ContactUsPage from './pages/contact-us-page';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<StandartLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
        </Route>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
