import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { commonRoutes, IRoutes } from "../../routes";
import { NavigateNext } from "@mui/icons-material";

const sx = {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
};

function findRouteLabel(path: string, routes: IRoutes[]): string {
  for (const route of routes) {
    if (route.path === path) return route.label;

    const label = route.children ? findRouteLabel(path, route.children) : "";

    if (label) return label;
  }
  return "";
}

export default function BreadcrumbsUkr() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((p) => p);

  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="Шлях"
    >
      <Typography
        variant="caption"
        component={Link}
        color="primary"
        to="/"
        sx={sx}
      >
        {"Головна"}
      </Typography>

      {pathnames.map((name, index) => {
        const routeTo = `${pathnames.slice(0, index).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const label = findRouteLabel(name, commonRoutes);

        return isLast ? (
          <Typography variant="caption" key={routeTo}>
            {label || name}
          </Typography>
        ) : (
          <Typography
            variant="caption"
            component={Link}
            key={routeTo}
            color="inherit"
            to={routeTo}
            sx={sx}
          >
            {label || name}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
}

/* State=Hover */
