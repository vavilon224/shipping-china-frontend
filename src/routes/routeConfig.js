import { lazy } from 'react';

export const MainPage = lazy(async () => await import('../Pages/Main/Main'));
export const NotFoundPage = lazy(async () => await import('../Pages/NotFoundPage/NotFoundPage'));


export const routeConfig = {
  main: {
    path: '/',
    element: <MainPage />,
  },

  not_found: {
    path: '*',
    element: <NotFoundPage />,
  },
};
