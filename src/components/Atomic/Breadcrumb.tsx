import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { commonRoutes, IRoutes } from "../../routes";

// TODO !!  not worked
function findLabelByPath(path: string, routes: IRoutes[]): string | null {
  for (const route of routes) {
    if (route.path === path) {
      return route.label || route.path;
    }
    if (route.children) {
      const label = findLabelByPath(path, route.children);
      if (label) return label;
    }
  }
  return null;
}
// TODO !!  not worked

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="Шлях">
      <Link color="inherit" to="/">
        {"Головна"}
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const label = findLabelByPath(routeTo, commonRoutes);

        return isLast ? (
          <Typography key={routeTo}>{label || name}</Typography>
        ) : (
          <Link key={routeTo} color="inherit" to={routeTo}>
            {label || name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
