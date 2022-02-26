import {
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
} from './types';

const routeStructure = [
  {
    path: '/',
    pageName: 'NavLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'products', pageName: 'ProductsPage' },
      { path: 'information', pageName: 'InformationPage' },
      { path: 'contactUs', pageName: 'ContactUsPage' },
      { path: 'product/:id', pageName: 'ProductPage' },
      { path: 'bag', pageName: 'BagPage', auth: USER },
      { path: 'saved', pageName: 'SavedPage' },
      { path: 'profile', pageName: 'ProfilePage', auth: AUTH },
      { path: '*', pageName: 'ErrorPage' },
    ],
  },
  {
    path: '/',
    pageName: 'NoNavLayout',
    childRoutes: [
      { path: 'login', pageName: 'LoginPage', auth: PUBLIC_ONLY },
      { path: 'register', pageName: 'RegisterPage', auth: PUBLIC_ONLY },
      { path: 'admin', pageName: 'AdminPage', auth: ADMIN },
      { path: 'add-product', pageName: 'AddProduct', auth: ADMIN },
      { path: 'update-product/:id', pageName: 'UpdateProduct', auth: ADMIN },
    ],
  },
];

export default routeStructure;
