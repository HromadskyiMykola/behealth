import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

export const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.HOME} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.HOME} replace />} />
    </Routes>
  );
};
