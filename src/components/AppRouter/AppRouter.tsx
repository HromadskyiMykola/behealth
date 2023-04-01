import { createBrowserRouter } from "react-router-dom";

import {
  IRoutes,
  commonRoutes,
  patientRoutes,
  doctorRoutes,
} from "../../routes";

// ReactRouter requires a full page import to work correctly !!
import Root from "../../pages/Root";
// import NotFound from "../../pages/404";
// ReactRouter requires a full page import to work correctly !!

const appRouter = () => {
  const isAuth = true;
  const userType = "patient";

  const rootRoute: IRoutes = {
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
