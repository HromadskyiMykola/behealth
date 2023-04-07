import { TRoute } from "~/common";

import { ERouteNames } from "./routeNames";

import * as Pages from "~/pages/index";

export const commonRoutes: TRoute[] = [
  {
    index: true,
    element: <Pages.HomePage />,
    label: "Головна",
    errorElement: <Pages.NotFound />,
  },
  { path: ERouteNames.ABOUT, element: <Pages.AboutPage />, label: "Про нас" },
  { path: ERouteNames.DOCTORS, element: <Pages.DoctorsPage />, label: "Лікарі" },
  { path: ERouteNames.CLINICS, element: <Pages.ClinicsPage />, label: "Заклади" },
  { path: "*", element: <Pages.NotFound />, label: "Помилка" },
];

// export const publicRoutes: TRoute[] = [...commonRoutes];

export const patientRoutes: TRoute[] = [
  ...commonRoutes,
  {
    path: ERouteNames.PATIENT_ACCOUNT,
    element: <Pages.PatientAccountPage />,
    label: "Кабінет пацієнта",
    children: [
      {
        index: true,
        element: <Pages.PatientAccountAppointments />,
        label: "",
      },
      {
        path: ERouteNames.PATIENT_ACCOUNT_APPOINTMENT,
        element: <Pages.PatientAccountAppointments />,
        label: "Записи",
      },
      {
        path: ERouteNames.PATIENT_ACCOUNT_HELP,
        element: <Pages.PatientAccountHelp />,
        label: "Допомога",
      },
      {
        path: ERouteNames.PATIENT_ACCOUNT_PERSONAL_INFO,
        element: <Pages.PatientAccountPersonalInfo />,
        label: "Особиста інформація",
      },
      {
        path: ERouteNames.PATIENT_ACCOUNT_ADDITIONAL_DATA,
        element: <Pages.PatientAccountAdditionalData />,
        label: "Особиста інформація",
      },
      {
        path: ERouteNames.PATIENT_ACCOUNT_PASSWORD_N_SECURITY,
        element: <Pages.PatientAccountPasswordNSecurity />,
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
    path: ERouteNames.PROFILE,
    element: <Pages.ProfilePage />,
    label: "ВКАЗАТИ НАЗВУ",
  },
];
