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
      // grazinamas routas(Layoutas iprastai), kuriame yra children
      <Route key={pageName} path={path} element={<Page />}>
        {childRoutes.map(generateRoutesRecursive)}
      </Route>
    );
  }
  // tikrinama ar yra pageProtector[gautu per props auth]
  const { auth, index, path } = routeData as RoutePageData;
  let authenticatedPage: React.ReactNode;
  // jeigu tokia apsauga puslapiui taikoma tai imama apsauga gautu
  // raktu ir perduodamas page per kuri iteruojam
  if (auth) {
    authenticatedPage = pageProtectors[auth](Page);
  } else {
    authenticatedPage = <Page />;
  }

  return (
    // grazinamas routas be children (todel uzsidaro savaime)
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
