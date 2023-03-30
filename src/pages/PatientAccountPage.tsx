// Underway !!!

import {
  Box,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";

import Breadcrumb from "../components/Atomic/Breadcrumb";
import CustomizedPaper from "../components/Atomic/CustomizedPaper";

import PatientAccountAppointments from "../pages/PatientAccountAppointments";
import PatientAccountHelp from "../pages/PatientAccountHelp";
import PatientAccountPersonalInfo from "../pages/PatientAccountPersonalInfo";

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
  // const routes = useRoutes(commonRoutes);
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  // console.log(routes);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      // indicatorColor="primary"
      // textColor="primary"
      indicatorColor="secondary"
      textColor="primary"
      orientation="vertical"
    >
      <Tab label="Главная" component={Link} to="/" />
      <Tab label="О нас" component={Link} to="/about" />
      <Tab label="Контакты" component={Link} to="/contact" />
      <Tab
        sx={{ color: "#fff", textDecoration: "none" }}
        label="Услуги"
        component={Link}
        to="/services"
      />
    </Tabs>
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
        <Paper
        // sx={{ width: "328px" }}
        >
          <NavTabs />
        </Paper>
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
