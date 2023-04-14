import clinicAvatar from "~/assets/images/clinic-avatar.png";
import { TAuthFormValues, validationRules } from "~/common";

export interface IClinicCard {
  name: string;
  img: string;
  type: string;
  chips: string[];
  medicine: string[];
  working: string;
  address: string;
  phone: string;
}

export interface IClinicAppointmentModalInput {
  id: number;
  label: string;
  placeholder: string;
  name: keyof TAuthFormValues;
  rules?: any;
}

export interface IClinicAppointmentModal {
  inputs: IClinicAppointmentModalInput[];
}

export const CLINIC_CARD: IClinicCard = {
  name: "Мережа клінік “ПУЛЬС”",
  img: clinicAvatar,
  type: "Приватна клініка",
  chips: ["Паркинг", "Дитяча кімната", "Оплата картою", "Wi-Fi зона", "Аптека"],
  medicine: [
    "Дерматовенерологія",
    "Дитяча дерматовенерологія",
    "Дитяча отоларингологія",
    "Неврологія",
    "Дерматовенерологія_",
    "Дитяча дерматовенерологія_",
    "Дитяча отоларингологія_",
    "Неврологія_",
  ],
  working: "08:00-20:00",
  address: "м. Київ, вул. Гмирі Бориса, 14 Б",
  phone: "(073) 35 337 27",
};

export const CLINIC_APPOINTMENT_MODAL: IClinicAppointmentModal = {
  inputs: [
    {
      id: 1,
      label: "Ім'я і прізвище пацієнта",
      placeholder: "Обов'язкове",
      name: "firstName",
      rules: validationRules.lastName,
    },
    {
      id: 2,
      label: "Телефон",
      placeholder: "Обов'язкове",
      name: "mobileNumber",
      rules: validationRules.mobileNumber,
    },
    {
      id: 3,
      label: "Електронна пошта",
      placeholder: "Обов'язкове",
      name: "email",
      rules: validationRules.email,
    },
    {
      id: 4,
      label: "Бажаний час прийому",
      placeholder: "Не обов'язкове",
      name: "time",
    },
  ],
};
