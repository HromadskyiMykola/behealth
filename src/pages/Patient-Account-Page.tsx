import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

import { Grid, Typography, Container } from "@mui/material";

import { BreadcrumbsUkr } from "~/components/atomic/index";

import { NavTabs } from "~/components/patient-Account-Personal-Info";
import { usePatientFetchingData } from "~/common";

export const PatientAccountPage = () => {
  const { patientPersonalData } = usePatientFetchingData();

  return (
    <>
      <Helmet>
        <title>Особистий кабінет пацієнта - BeHealth</title>
        <meta
          name="description"
          content="Особистий кабінет пацієнта порталу BeHealth."
        />
      </Helmet>

      <Container sx={{ mb: "30px", mt: "30px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BreadcrumbsUkr />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4">
              Вітаємо
              {patientPersonalData?.firstName &&
                `, ${patientPersonalData.firstName}`}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <NavTabs />
          </Grid>

          <Grid item xs>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
