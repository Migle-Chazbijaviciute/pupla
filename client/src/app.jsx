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
import BagPage from './pages/bag-page';
import SavedPage from './pages/saved-page';
import HomePage from './pages/home-page';
import InformationPage from './pages/information-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import AdminPage from './pages/admin-page';
import ProductsPage from './pages/products-page';
import ProductPage from './pages/product-page';
import ContactUsPage from './pages/contact-us-page';
import ErrorPage from './pages/error-page';

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
          <Route path="/bag" element={<BagPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
        <Route path="/" element={<NoNavLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
