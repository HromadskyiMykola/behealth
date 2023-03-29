import { RouteObject } from "react-router-dom";

// ReactRouter requires a full page import to work correctly !!
import PatientAccountAppointments from "../pages/PatientAccountAppointments";
import PatientAccountHelp from "../pages/PatientAccountHelp";
import PatientAccountPage from "../pages/PatientAccountPage";
import PatientAccountPersonalInfo from "../pages/PatientAccountPersonalInfo";
import HomePage from "../pages/HomePage";
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
  PATIENT_ACCOUNT = "patient-account",
  PATIENT_ACCOUNT_PERSONAL_INFO = "personal-info",
  PATIENT_ACCOUNT_APPOINTMENT = "appointment",
  PATIENT_ACCOUNT_HELP = "help",
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
    path: RouteNames.PATIENT_ACCOUNT,
    element: <PatientAccountPage />,
    label: "Кабінет пацієнта",
    children: [
      {
        path: RouteNames.PATIENT_ACCOUNT_PERSONAL_INFO,
        element: <PatientAccountPersonalInfo />,
        label: "Особиста інформація",
      },
      {
        path: RouteNames.PATIENT_ACCOUNT_APPOINTMENT,
        element: <PatientAccountAppointments />,
        label: "Записи",
      },
      {
        path: RouteNames.PATIENT_ACCOUNT_HELP,
        element: <PatientAccountHelp />,
        label: "Допомога",
      },
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
