import { createBrowserRouter } from "react-router-dom";

import { TypesInterfaces } from "../../common";
import { commonRoutes, patientRoutes, doctorRoutes } from "../../routes";

import { NotFound, Root } from "../../pages";

const appRouter = () => {
  const isAuth = true;
  const userType = "patient";

  const rootRoute: TypesInterfaces.Route = {
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
