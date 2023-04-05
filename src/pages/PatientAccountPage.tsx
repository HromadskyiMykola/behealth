import { SyntheticEvent, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Divider, Grid, Paper, Tabs, Typography } from "@mui/material";

import {
  ClockIcon,
  HelpCircleIcon,
  UserCogIcon,
  FolderClosedIcon,
  LockIcon,
  LogOutIcon,
} from "lucide-react";

import { BreadcrumbsUkr, TabLink } from "~atomic/index";

import { ERouteNames } from "~/routes/routeNames";

const WrapperDivider = () => <Divider sx={{ mb: "16px" }} />;

const NavTabs = () => {
  const location = useLocation();

  const matchPath = useMemo(() => {
    const tabsValues = [
      ERouteNames.PATIENT_ACCOUNT_APPOINTMENT,
      ERouteNames.PATIENT_ACCOUNT_HELP,
      ERouteNames.PATIENT_ACCOUNT_PERSONAL_INFO,
      ERouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA,
      ERouteNames.PATIENT_ACCOUNT_PASSWORD_N_SECURITY,
    ];
    const pathNames = location.pathname.split("/");

    return tabsValues.find((p) => pathNames.includes(p));
  }, [location]);

  const [value, setValue] = useState(
    matchPath || ERouteNames.PATIENT_ACCOUNT_APPOINTMENT
  );

  useEffect(() => {
    if (matchPath !== value) {
      setValue(matchPath || ERouteNames.PATIENT_ACCOUNT_APPOINTMENT);
    }
  }, [matchPath, value]);

  const handleChange = (event: SyntheticEvent, newValue: ERouteNames) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ borderRadius: "12px" }}>
      <Tabs
        sx={{
          p: "24px 24px 8px 24px",
          "& .MuiTab-root": { marginBottom: "16px" },
          "& .MuiTabs-indicator": { display: "none" },
        }}
        value={value}
        onChange={handleChange}
        orientation="vertical"
      >
        <TabLink
          icon={<ClockIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_APPOINTMENT}
          label="Записи"
          to={ERouteNames.PATIENT_ACCOUNT_APPOINTMENT}
        />
        <TabLink
          icon={<HelpCircleIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_HELP}
          label="Допомога"
          to={ERouteNames.PATIENT_ACCOUNT_HELP}
        />

        <WrapperDivider />

        <TabLink
          icon={<UserCogIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_PERSONAL_INFO}
          label="Особиста інформація"
          to={ERouteNames.PATIENT_ACCOUNT_PERSONAL_INFO}
        />
        <TabLink
          icon={<FolderClosedIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA}
          label="Додаткові дані"
          to={ERouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA}
        />
        <TabLink
          icon={<LockIcon style={{ flexShrink: 0 }} size={22} />}
          value={ERouteNames.PATIENT_ACCOUNT_PASSWORD_N_SECURITY}
          label="Пароль та безпека"
          to={ERouteNames.PATIENT_ACCOUNT_PASSWORD_N_SECURITY}
        />

        <WrapperDivider />

        <TabLink
          icon={<LogOutIcon style={{ flexShrink: 0 }} size={22} />}
          value={"logout"}
          label="Вихід"
          to="logout"
        />
      </Tabs>
    </Paper>
  );
};

export function PatientAccountPage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <BreadcrumbsUkr />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">{"Вітаємо, Тарас"}</Typography>
      </Grid>
      <Grid item xs={3}>
        <NavTabs />
      </Grid>
      <Grid item xs>
        <Outlet />
      </Grid>
    </Grid>
  );
}
