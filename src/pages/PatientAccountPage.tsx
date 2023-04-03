import { SyntheticEvent, useState } from "react";
import { Outlet } from "react-router-dom";
import { Divider, Grid, Paper, Tabs, Typography } from "@mui/material";

import { BreadcrumbsUkr, TabLink } from "@components/Atomic";

import { RouteNames } from "../routes";

import {
  ClockIcon,
  ExitIcon,
  FolderIcon,
  HelpIcon,
  LockIcon,
  PersonInfoIcon,
} from "../assets/CustomIcon";

const WrapperDivider = () => <Divider sx={{ mb: "16px" }} />;

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
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
          icon={<ClockIcon />}
          value={0}
          label="Записи"
          to={RouteNames.PATIENT_ACCOUNT_APPOINTMENT}
        />
        <TabLink
          icon={<HelpIcon />}
          value={1}
          label="Допомога"
          to={RouteNames.PATIENT_ACCOUNT_HELP}
        />

        <WrapperDivider />

        <TabLink
          icon={<PersonInfoIcon />}
          value={2}
          label="Особиста інформація"
          to={RouteNames.PATIENT_ACCOUNT_PERSONAL_INFO}
        />
        <TabLink
          icon={<FolderIcon />}
          value={3}
          label="Додаткові дані"
          to={RouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA}
        />
        <TabLink
          icon={<LockIcon />}
          value={4}
          label="Пароль та безпека"
          to={RouteNames.PATIENT_ACCOUNT_PASSWORD_N_SECURITY}
        />

        <WrapperDivider />

        <TabLink icon={<ExitIcon />} value={5} label="Вихід" to="logout" />
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
