import { createBrowserRouter } from "react-router-dom";

import { IRoutes, privateRoutes, publicRoutes } from "../../routes";

// ReactRouter requires a full page import to work correctly !!
import Root from "../../pages/Root";
// import NotFound from "../../pages/404";
// ReactRouter requires a full page import to work correctly !!

const appRouter = () => {
  const isAuth = false;

  const rootRoute: IRoutes = {
    element: <Root />,
    children: isAuth ? privateRoutes : publicRoutes,
    label: "Корінь",
    // errorElement: <NotFound />,
  };

  return createBrowserRouter([rootRoute]);
};

export default appRouter();
