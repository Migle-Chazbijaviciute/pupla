import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loggedInSelector } from '../store/auth';
import routeStructure, { RouteData, RouteLayoutData, RoutePageData } from './route-structure';
import pageRoutesList from './page-routes-list';
import pageProtectors from './protectors/page-protectors';

type RouteElement = ReturnType<typeof Route>;

const generateRoutesRecursive = (routeData: RouteData): RouteElement => {
  const Page = pageRoutesList[routeData.pageName];
  if ((routeData as RouteLayoutData).childRoutes) {
    const { pageName, path, childRoutes } = routeData as RouteLayoutData;
    return (
      <Route key={pageName} path={path} element={<Page />}>
        {childRoutes.map(generateRoutesRecursive)}
      </Route>
    );
  }
  const { auth, index, path } = routeData as RoutePageData;
  let authenticatedPage: React.ReactNode;

  if (auth) {
    authenticatedPage = pageProtectors[auth](Page);
  } else {
    authenticatedPage = <Page />;
  }

  return (
    <Route
      key={routeData.pageName}
      path={path}
      index={index}
      element={authenticatedPage}
    />
  );
};

const routes = routeStructure.map(generateRoutesRecursive);

const EmptyComponent = () => <div />;

const PageRouter = () => {
  const loggedIn = useSelector(loggedInSelector);
  return (
    <BrowserRouter>
      <Routes>
        {loggedIn !== null
          ? routes
          : <Route path="*" element={<EmptyComponent />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
