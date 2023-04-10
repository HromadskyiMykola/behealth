import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { TRoute } from "~/common";

import { commonRoutes, patientRoutes, doctorRoutes } from "~/routes";
import { Root, NotFound } from "~/pages";
import { useAuth } from "./AuthProvider";

export const AppRouter = () => {
  const { authenticatedUser } = useAuth();

  const rootRoute: TRoute = {
    path: "/",
    element: <Root />,
    children: !authenticatedUser
      ? commonRoutes
      : authenticatedUser.type === "patient"
      ? patientRoutes
      : doctorRoutes,
    label: "Корінь",
    // errorElement: <NotFound />,
  };

  const appRouter = createBrowserRouter([rootRoute]);

  return <RouterProvider router={appRouter} />;
};
