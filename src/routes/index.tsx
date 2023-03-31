import { RouteObject } from "react-router-dom";

// ReactRouter requires a full page import to work correctly !!
import HomePage from "../pages/HomePage";
import PatientAccountPage from "../pages/PatientAccountPage";
import PatientAccountAppointments from "../pages/PatientAccountAppointments";
import PatientAccountHelp from "../pages/PatientAccountHelp";
import PatientAccountPersonalInfo from "../pages/PatientAccountPersonalInfo";
import PatientAccountAdditionalData from "../pages/PatientAccountAdditionalData";
import PatientAccountPasswordNSecurity from "../pages/PatientAccountPasswordNSecurity";
import AboutPage from "../pages/AboutPage";
import DoctorsPage from "../pages/DoctorsPage";
import ClinicsPage from "../pages/ClinicsPage";
import ProfilePage from "../pages/ProfilePage";
import NotFound from "../pages/404";
// ReactRouter requires a full page import to work correctly !!

export type IRoutes = RouteObject & {
  label: string;
  children?: IRoutes[];
};

export enum RouteNames {
  HOME = "/",
  ABOUT = "about",
  DOCTORS = "doctors",
  CLINICS = "clinics",
  PROFILE = "profile",
  // PATIENT_ACCOUNT = "patient-account",
  // PATIENT_ACCOUNT_APPOINTMENT = "appointment",
  // PATIENT_ACCOUNT_HELP = "help",
  // PATIENT_ACCOUNT_PERSONAL_INFO = "personal-info",
  // PATIENT_ACCOUNT_ADDITIONAL_DATA = "additional-data",
}

export const commonRoutes: IRoutes[] = [
  {
    index: true,
    element: <HomePage />,
    label: "Головна",
    errorElement: <NotFound />,
  },
  { path: RouteNames.ABOUT, element: <AboutPage />, label: "Про нас" },
  { path: RouteNames.DOCTORS, element: <DoctorsPage />, label: "Лікарі" },
  { path: RouteNames.CLINICS, element: <ClinicsPage />, label: "Заклади" },
  {
    // path: RouteNames.PATIENT_ACCOUNT,
    path: "patient-account",
    element: <PatientAccountPage />,
    label: "Кабінет пацієнта",
    children: [
      {
        // path: RouteNames.PATIENT_ACCOUNT_APPOINTMENT,
        path: "appointment",
        element: <PatientAccountAppointments />,
        label: "Записи",
      },
      {
        // path: RouteNames.PATIENT_ACCOUNT_HELP,
        path: "help",
        element: <PatientAccountHelp />,
        label: "Допомога",
      },
      {
        // path: RouteNames.PATIENT_ACCOUNT_PERSONAL_INFO,
        path: "personal-info",
        element: <PatientAccountPersonalInfo />,
        label: "Особиста інформація",
      },
      {
        // path: RouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA,
        path: "additional-data",
        element: <PatientAccountAdditionalData />,
        label: "Особиста інформація",
      },
      {
        path: "password-n-security",
        element: <PatientAccountPasswordNSecurity />,
        label: "Додаткові дані",
      },
      //// thumb
      {
        path: "logout",
        element: <h2>We will miss you...</h2>,
        label: "Вихід",
      },
      //// thumb
    ],
  } as IRoutes,
];

export const publicRoutes: IRoutes[] = [
  ...commonRoutes,
  { path: "*", element: <NotFound />, label: "Помилка" },
];

export const privateRoutes: IRoutes[] = [
  ...commonRoutes,
  {
    path: RouteNames.PROFILE,
    element: <ProfilePage />,
    label: "ВКАЗАТИ НАЗВУ",
  },
  { path: "*", element: <NotFound />, label: "Помилка" },
];
