import { createBrowserRouter } from "react-router-dom";

import { TRoute } from "~/common";

import { commonRoutes, patientRoutes, doctorRoutes } from "~/routes";
import { Root, NotFound } from "~/pages";

const router = () => {
  const isAuth = true;
  const userType = "patient";

  const rootRoute: TRoute = {
    element: <Root />,
    children: !isAuth
      ? commonRoutes
      : userType === "patient"
      ? patientRoutes
      : doctorRoutes,
    label: "Корінь",
    // errorElement: <NotFound />,
  };

  return createBrowserRouter([rootRoute]);
};

export const appRouter = router();
