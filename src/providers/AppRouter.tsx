import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { EUserType, TRoute } from "~/common";

import { commonRoutes, patientRoutes, doctorRoutes } from "~/routes";
import { Root, NotFound } from "~/pages";
import { useAuthProvider } from "./AuthProvider";

export const AppRouter = () => {
  const { authenticatedUser } = useAuthProvider();

  const rootRoute: TRoute = {
    path: "/",
    element: <Root />,
    children: !authenticatedUser
      ? commonRoutes //TODO: !!!
      : // ? [...commonRoutes, ...doctorRoutes, ...patientRoutes] // TODO: !!!
      authenticatedUser.type === EUserType.PATIENT
      ? patientRoutes
      : doctorRoutes,
    label: "Корінь",
    // errorElement: <NotFound />,
  };

  const appRouter = createBrowserRouter([rootRoute]);

  return <RouterProvider router={appRouter} />;
};
