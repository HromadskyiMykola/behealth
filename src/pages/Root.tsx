import { Outlet, useLocation } from "react-router-dom";

import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import { ERouteNames } from "~/routes/routeNames";
import { Container } from "@mui/material";

export function Root() {
  const { pathname } = useLocation();
  const firstPath = pathname.split("/")[1];

  return (
    <>
      <Header />
      {firstPath === ERouteNames.PATIENT_ACCOUNT ? (
        <Container sx={{mb: '30px', mt: '30px'}}>
          <Outlet />
        </Container>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
}
