import { PageName, ConcretePageName, DynamicPageName } from './page-routes-list';
import {
  PUBLIC_ONLY,
  AUTH,
  USER,
  ADMIN,
  AuthType,
} from './auth-types';

export type RoutePageData = {
  index?: true,
  path?: string,
  auth?: AuthType
};

export type ConcreteRoutePageData = RoutePageData & {
  pageName: ConcretePageName,
};

export type DynamicRoutePageData = RoutePageData & {
  pageName: DynamicPageName,
};

export type RouteData = RouteLayoutData | ConcreteRoutePageData | DynamicRoutePageData;

export type RouteLayoutData = {
  path: string,
  pageName: PageName,
  childRoutes: Array<RouteData>
};

const routeStructure: Array<RouteData> = [
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
