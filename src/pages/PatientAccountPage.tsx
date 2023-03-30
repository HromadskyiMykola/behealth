// Underway !!!

import {
  Grid,
  Paper,
  Tabs,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import {
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { TabLink } from "../components/Atomic";

import Breadcrumb from "../components/Atomic/Breadcrumb";
import CustomizedPaper from "../components/Atomic/CustomizedPaper";

import PatientAccountAppointments from "../pages/PatientAccountAppointments";
import PatientAccountHelp from "../pages/PatientAccountHelp";
import PatientAccountPersonalInfo from "../pages/PatientAccountPersonalInfo";
import {
  ClockIcon,
  ExitIcon,
  FolderIcon,
  HelpIcon,
  LockIcon,
  PersonInfoIcon,
} from "../assets/CustomIcon";

//////////////////////////////////// TabPanel
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index } = props;

//   return (
//     <CustomizedPaper
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//     >
//       {value === index && children}
//     </CustomizedPaper>
//   );
// }
//////////////////////////////////// TabPanel

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
        <TabLink icon={<HelpIcon />} value={1} label="Допомога" to="help" />
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
          to="additional-information"
        />
        <TabLink
          icon={<LockIcon />}
          value={4}
          label="Пароль та безпека"
          to="password-n-security"
        />
        <TabLink icon={<ExitIcon />} value={5} label="Вихід" to="logout" />
      </Tabs>
    </Paper>
  );
};

function PatientAccount() {
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

function PatientAccountPage() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PatientAccount />}
        errorElement={<h1>Something wrong...</h1>}
      >
        <Route index element={<PatientAccountAppointments />} />
        <Route
          path="help"
          element={<PatientAccountPersonalInfo />}
          // loader={userPageLoader}
        />
        <Route
          path="personal-info"
          element={<PatientAccountPersonalInfo />}
          // loader={todoPageLoader}
        />
        <Route path="*" element={<PatientAccountAppointments />} />
      </Route>
    </Routes>
  );
}

export default PatientAccountPage;
