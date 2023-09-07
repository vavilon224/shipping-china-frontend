import { Suspense, useCallback, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from './routeConfig';
import { RequireAuth } from './requireAuth';
import { RequireAdminAuth } from './adminAuth';
import {Spin} from "antd";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route) => {
    const element = <Suspense fallback={<Spin />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly && !route.adminOnly ? <RequireAuth>{element}</RequireAuth> : route.adminOnly ? <RequireAdminAuth>{element}</RequireAdminAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
