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
  {
    path: ERouteNames.DOCTORS,
    element: <Pages.DoctorsPage />,
    label: "Лікарі",
  },
  {
    path: ERouteNames.CLINICS,
    element: <Pages.ClinicsPage />,
    label: "Заклади",
  },
  {
    path: ERouteNames.CLINICS + "/:id",
    element: <Pages.ClinicInfoPage />,
    label: "Інформація про заклад",
  },
  {
    path: ERouteNames.CONFIRMATION,
    element: (
      <>
        <Pages.HomePage />
        <Pages.PatientPersonalIdentification />
      </>
    ),
    label: "підтвердження пошти та ідентифікація",
  },
  { path: "*", element: <Pages.NotFound />, label: "Помилка" },
];

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
        path: ERouteNames.PATIENT_ACCOUNT_APPOINTMENTS,
        element: <Pages.PatientAccountAppointments />,
        label: "Записи",
        children: [
          {
            path: ":id",
            element: <Pages.PatientAccountAppointments />,
            label: "Запис",
          },
        ],
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
        element: <Pages.AccountPasswordNSecurity />,
        label: "Додаткові дані",
      },
    ],
  } as TRoute,
];

export const doctorRoutes: TRoute[] = [
  ...commonRoutes,
  {
    path: ERouteNames.DOCTOR_ACCOUNT,
    element: <Pages.DoctorAccountPage />,
    label: "Кабінет лікаря",
    children: [
      {
        index: true,
        element: <div></div>,
        label: "",
      },
      {
        path: ERouteNames.DOCTOR_ACCOUNT_SCHEDULE_OF_RECEPTIONS,
        element: <div></div>,
        label: "Розклад прийомів",
      },
      {
        path: ERouteNames.DOCTOR_ACCOUNT_APPOINTMENTS,
        element: <div></div>,
        label: "Записи",
      },
      {
        path: ERouteNames.DOCTOR_ACCOUNT_HELP,
        element: <div></div>,
        label: "Допомога",
      },
      {
        path: ERouteNames.DOCTOR_ACCOUNT_HEAD_DOCTOR,
        element: <div></div>,
        label: "Головний лікарь",
      },
      {
        path: ERouteNames.DOCTOR_ACCOUNT_PERSONAL_INFO,
        element: <div></div>,
        label: "Особиста інформація",
      },
      {
        path: ERouteNames.DOCTOR_ACCOUNT_PROFESSIONAL_DATA,
        element: <div></div>,
        label: "Професійні дані",
      },
      {
        path: ERouteNames.DOCTOR_ACCOUNT_PASSWORD_N_SECURITY,
        element: <Pages.AccountPasswordNSecurity />,
        label: "Пароль та безпека",
      },
    ],
  } as TRoute,
];
