import { TRoute } from "~/common";

import { ERouteNames } from "./routeNames";

import * as Pages from "~/pages/index";
import { AppointmentScheduleDate } from "~/components/atomic";

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
    path: ERouteNames.CLINICS + '/:id',
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
        element: <Pages.PatientAccountPasswordNSecurity />,
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
        element: <AppointmentScheduleDate />,
        label: "",
      },
      {
        path: ERouteNames.DOCTOR_ACCOUNT_SCHEDULE_OF_RECEPTIONS,
        element: <AppointmentScheduleDate />,
        label: "Розклад прийомів",
      },
    ],
  } as TRoute,
];
