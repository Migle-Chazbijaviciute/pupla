import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loggedInSelector } from '../store/auth';
import routeStructure from './route-structure';
import pagesList from './page-routes-list';
import pageProtectors from './protectors/page-protectors';

const generateRoutesRecursive = ({
  path,
  index,
  pageName,
  childRoutes,
  auth,
}) => {
  const Page = pagesList[pageName];
  if (childRoutes) {
    return (
      // grazinamas routas(Layoutas iprastai), kuriame yra children
      <Route key={pageName} path={path} element={<Page />}>
        {childRoutes.map(generateRoutesRecursive)}
      </Route>
    );
  }
  // tikrinama ar yra pageProtector[gautu per props auth]
  const authenticatedPage = pageProtectors[auth]
  // jeigu tokia apsauga puslapiui taikoma tai imama apsauga gautu
  // raktu ir perduodamas page per kuri iteruojam
    ? pageProtectors[auth](Page)
  // jeigu netaikoma grazina psl be auth
    : <Page />;

  return (
    // grazinamas routas be chlidren (todel uzsidaro savaime)
    <Route
      key={pageName}
      path={path}
      index={index}
      element={authenticatedPage}
    />
  );
};

const routes = routeStructure.map(generateRoutesRecursive);

const PageRouter = () => {
  const loggedIn = useSelector(loggedInSelector);
  return (
    <BrowserRouter>
      <Routes>
        {loggedIn !== null ? routes : null }
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
