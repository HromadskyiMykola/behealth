import { SyntheticEvent, useState } from "react";
import { Outlet } from "react-router-dom";
import { Divider, Grid, Paper, Tabs, Typography } from "@mui/material";

import { Breadcrumb, TabLink } from "../components/Atomic";

import {
  ClockIcon,
  ExitIcon,
  FolderIcon,
  HelpIcon,
  LockIcon,
  PersonInfoIcon,
} from "../assets/CustomIcon";

const WrapperDivider = () => <Divider />;

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
          to="appointment"
        />
        <TabLink
          icon={<HelpIcon />}
          value={1}
          label="Допомога"
          to="help"
        />
        
        <WrapperDivider />
        
        <TabLink
          icon={<PersonInfoIcon />}
          value={2}
          label="Особиста інформація"
          to="personal-info"
          />
        <TabLink
          icon={<FolderIcon />}
          value={3}
          label="Додаткові дані"
          to="additional-data"
          />
        <TabLink
          icon={<LockIcon />}
          value={4}
          label="Пароль та безпека"
          to="password-n-security"
          />
        
        <WrapperDivider />
        
        <TabLink
          icon={<ExitIcon />}
          value={5}
          label="Вихід"
          to="logout"
          />
      </Tabs>
    </Paper>
  );
};

function PatientAccountPage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Breadcrumb />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">{"Вітаємо, Тарас"}</Typography>
      </Grid>
      <Grid item xs={3}>
        <NavTabs />
      </Grid>
      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default PatientAccountPage;
