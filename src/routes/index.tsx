import { TRoute } from "@common/types-and-interfaces";

// import {
//   HomePage,
//   PatientAccountAdditionalData,
//   PatientAccountAppointments,
//   PatientAccountHelp,
//   PatientAccountPage,
//   PatientAccountPasswordNSecurity,
//   PatientAccountPersonalInfo,
//   AboutPage,
//   DoctorsPage,
//   ClinicsPage,
//   ProfilePage,
//   NotFound,
// } from "@pages/index";

// ReactRouter requires a full page import to work correctly !!
import { HomePage } from "../pages/HomePage";
import { PatientAccountPage } from "../pages/PatientAccountPage";
import { PatientAccountAppointments } from "../pages/PatientAccountAppointments";
import { PatientAccountHelp } from "../pages/PatientAccountHelp";
import { PatientAccountPersonalInfo } from "../pages/PatientAccountPersonalInfo";
import { PatientAccountAdditionalData } from "../pages/PatientAccountAdditionalData";
import { PatientAccountPasswordNSecurity } from "../pages/PatientAccountPasswordNSecurity";
import { AboutPage } from "../pages/AboutPage";
import { DoctorsPage } from "../pages/DoctorsPage";
import { ClinicsPage } from "../pages/ClinicsPage";
import { ProfilePage } from "../pages/ProfilePage";
import { NotFound } from "../pages/404";
// ReactRouter requires a full page import to work correctly !!

export enum RouteNames {
  HOME = "/",
  ABOUT = "about",
  DOCTORS = "doctors",
  CLINICS = "clinics",
  PROFILE = "profile",
  PATIENT_ACCOUNT = "patient-account",
  PATIENT_ACCOUNT_APPOINTMENT = "appointment",
  PATIENT_ACCOUNT_HELP = "help",
  PATIENT_ACCOUNT_PERSONAL_INFO = "personal-info",
  PATIENT_ACCOUNT_ADDITIONAL_DATA = "additional-data",
  PATIENT_ACCOUNT_PASSWORD_N_SECURITY = "password-n-security",
  DOCTOR_ACCOUNT = "doctor-account",
  // other
}

export const commonRoutes: TRoute[] = [
  {
    index: true,
    element: <HomePage />,
    label: "Головна",
    errorElement: <NotFound />,
  },
  { path: RouteNames.ABOUT, element: <AboutPage />, label: "Про нас" },
  { path: RouteNames.DOCTORS, element: <DoctorsPage />, label: "Лікарі" },
  { path: RouteNames.CLINICS, element: <ClinicsPage />, label: "Заклади" },
  { path: "*", element: <NotFound />, label: "Помилка" },
];

// export const publicRoutes: TRoute[] = [...commonRoutes];

export const patientRoutes: TRoute[] = [
  ...commonRoutes,
  {
    path: RouteNames.PATIENT_ACCOUNT,
    element: <PatientAccountPage />,
    label: "Кабінет пацієнта",
    children: [
      {
        index: true,
        element: <PatientAccountAppointments />,
        label: "",
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
      {
        path: RouteNames.PATIENT_ACCOUNT_PERSONAL_INFO,
        element: <PatientAccountPersonalInfo />,
        label: "Особиста інформація",
      },
      {
        path: RouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA,
        element: <PatientAccountAdditionalData />,
        label: "Особиста інформація",
      },
      {
        path: RouteNames.PATIENT_ACCOUNT_PASSWORD_N_SECURITY,
        element: <PatientAccountPasswordNSecurity />,
        label: "Додаткові дані",
      },
      // plug
      {
        path: "logout",
        element: <h2>We will miss you...</h2>,
        label: "Вихід",
      },
      // plug
    ],
  } as TRoute,
];

export const doctorRoutes: TRoute[] = [
  ...commonRoutes,
  {
    path: RouteNames.PROFILE,
    element: <ProfilePage />,
    label: "ВКАЗАТИ НАЗВУ",
  },
];
