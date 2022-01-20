import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import NavLayout from './components/layouts/nav-layout';
import NoNavLayout from './components/layouts/no-nav-layout';
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
        <Route path="/" element={<NavLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/" element={<NoNavLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
