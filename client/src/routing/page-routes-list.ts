// no-auth
import HomePage from '../pages/home-page';
import ProductsPage from '../pages/products-page';
import InformationPage from '../pages/information-page';
import ContactUsPage from '../pages/contact-us-page';
import ProductPage from '../pages/product-page';
import SavedPage from '../pages/saved-page';
import ErrorPage from '../pages/error-page';
// public-only
import LoginPage from '../pages/public-only/login-page';
import RegisterPage from '../pages/public-only/register-page';
// auth
import ProfilePage from '../pages/authorized/profile-page';
// user
import BagPage from '../pages/authorized/user/bag-page';
// admin
import AdminPage from '../pages/authorized/admin/admin-page';
import AddProduct from '../pages/authorized/admin/add-product';
import UpdateProduct from '../pages/authorized/admin/update-product';
// layouts
import NavLayout from '../components/layouts/nav-layout';
import NoNavLayout from '../components/layouts/no-nav-layout';

export type LayoutPageName = 'NavLayout' | 'NoNavLayout';
export type DynamicPageName = 'ErrorPage' | 'ProductPage' | 'UpdateProduct';
export type ConcretePageName = 'HomePage' | 'ProductsPage' | 'InformationPage' | 'ContactUsPage' | 'SavedPage' | 'LoginPage' | 'RegisterPage' | 'ProfilePage' | 'BagPage' | 'AdminPage' | 'AddProduct';

export type PageName = LayoutPageName | ConcretePageName | DynamicPageName;

export type PageRoutesList = {
  [key in PageName]: React.FC
};

const pageRoutesList: PageRoutesList = {
  NavLayout,
  NoNavLayout,
  HomePage,
  ErrorPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  ProductsPage,
  SavedPage,
  ProductPage,
  BagPage,
  InformationPage,
  ContactUsPage,
  AdminPage,
  AddProduct,
  UpdateProduct,
};

export default pageRoutesList;
