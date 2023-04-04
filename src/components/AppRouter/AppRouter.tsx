import { createBrowserRouter } from "react-router-dom";

import { TRoute } from "@common/types-and-interfaces";

import { commonRoutes, patientRoutes, doctorRoutes } from "../../routes";
import { Root, NotFound } from "@pages/index";

const appRouter = () => {
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

export default appRouter();
