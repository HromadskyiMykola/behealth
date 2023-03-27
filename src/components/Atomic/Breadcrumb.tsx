import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
    // .filter((x) => x);

  return (
    <Breadcrumbs aria-label="Шлях">
      <Link color="inherit" to="/">
        {"Головна"}
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join(" > ")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={routeTo}>{name}</Typography>
        ) : (
          <Link key={routeTo} color="inherit" to={routeTo}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

