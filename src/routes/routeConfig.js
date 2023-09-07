import {lazy} from 'react';

export const MainPage = lazy(async () => await import('../Pages/Main/Main'));
export const NotFoundPage = lazy(async () => await import('../Pages/NotFoundPage/NotFoundPage'));
export const User = lazy(async () => await import('../Pages/User/User'));
export const Report = lazy(async () => await import('../Pages/Report/Report'));

export const routeConfig = {
  main: {
    path: '/',
    element: <MainPage/>,
  },
  user: {
    path: '/user/:id',
    element: <User/>,
    addParams: 'id'
  },

  report: {
    path: '/report',
    element: <Report/>,
  },
  not_found: {
    path: '*',
    element: <NotFoundPage/>,
  },
};
