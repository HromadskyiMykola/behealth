import { createBrowserRouter } from "react-router-dom";
import { Root } from "../../pages";
import { IRoutes, privateRoutes, publicRoutes } from "../../routes";

const appRouter = () => {
  const isAuth = false;

  const mainRoute: IRoutes = {
    path: "/",
    element: <Root />,
    children: isAuth ? privateRoutes : publicRoutes,
  };

  return createBrowserRouter([mainRoute]);
};

export default appRouter();
