import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

import { TRoute } from "~/common";
import { patientRoutes, doctorRoutes } from "~/routes";

const sx = {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
};

function findRouteLabel(name: string, routes: TRoute[]): string {
  for (const route of routes) {
    if (route.path === name) return route.label;

    const label = route.children ? findRouteLabel(name, route.children) : "";

    if (label) return label;
  }
  return "";
}

export function BreadcrumbsUkr() {
  const location = useLocation();
  const pathNames = useMemo(
    () => location.pathname.split("/").filter((p) => p),
    [location]
  );
  const allRoutes = useMemo(() => [...patientRoutes, ...doctorRoutes], []);

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

      {pathNames.map((name, index) => {
        const label = findRouteLabel(name, allRoutes);
        const isLast = index === pathNames.length - 1;
        const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;

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
