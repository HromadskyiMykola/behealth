import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

import {
  Paper,
  Stack,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { BreadcrumbsUkr } from "~/components/atomic/index";

import {
  NavTabs,
  NavTabsWithDrawer,
} from "~/components/patient-Account-Personal-Info";
import { usePatientFetchingData } from "~/hooks";

export const PatientAccountPage = () => {
  const { patientPersonalData } = usePatientFetchingData();
  const { breakpoints } = useTheme();
  const isDownSm = useMediaQuery(breakpoints.down("md"));

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
        <Stack spacing={3}>
          {isDownSm && <NavTabsWithDrawer />}

          <BreadcrumbsUkr />

          <Typography
            variant="h4"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Вітаємо
            {patientPersonalData?.firstName &&
              `, ${patientPersonalData.firstName}`}
          </Typography>

          <Stack spacing={3} direction="row" alignItems="flex-start">
            {!isDownSm && (
              <Paper sx={{ borderRadius: "12px" }}>
                <NavTabs />
              </Paper>
            )}

            <Stack spacing={3} width="100%">
              <Outlet />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
