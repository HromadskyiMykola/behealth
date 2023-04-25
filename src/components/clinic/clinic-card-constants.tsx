import clinicAvatar from "~/assets/images/clinic-avatar.png";
import { TAuthFormValues, validationRules } from "~/common";
import React, { ReactNode } from "react";
import { Facebook2 } from "~/assets/CustomIcon/Facebook2";
import { Youtube } from "~/assets/CustomIcon/Youtube";
import { Instagram2 } from "~/assets/CustomIcon/Instagram2";

export interface IClinicCard {
  id: number;
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
  id: 1,
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

export const CLINIC_CARD_LIST: IClinicCard[] = [
  {
    id: 1,
    name: "Мережа клінік “ПУЛЬС”",
    img: clinicAvatar,
    type: "Приватна клініка",
    chips: [
      "Паркинг",
      "Дитяча кімната",
      "Оплата картою",
      "Wi-Fi зона",
      "Аптека",
    ],
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
  },
  {
    id: 2,
    name: "Мережа клінік “ПУЛЬС”",
    img: clinicAvatar,
    type: "Приватна клініка",
    chips: [
      "Паркинг",
      "Дитяча кімната",
      "Оплата картою",
      "Wi-Fi зона",
      "Аптека",
    ],
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
  },
  {
    id: 3,
    name: "Мережа клінік “ПУЛЬС”",
    img: clinicAvatar,
    type: "Приватна клініка",
    chips: [
      "Паркинг",
      "Дитяча кімната",
      "Оплата картою",
      "Wi-Fi зона",
      "Аптека",
    ],
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
  },
  {
    id: 4,
    name: "Мережа клінік “ПУЛЬС”",
    img: clinicAvatar,
    type: "Приватна клініка",
    chips: [
      "Паркинг",
      "Дитяча кімната",
      "Оплата картою",
      "Wi-Fi зона",
      "Аптека",
    ],
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
  },
  {
    id: 5,
    name: "Мережа клінік “ПУЛЬС”",
    img: clinicAvatar,
    type: "Приватна клініка",
    chips: [
      "Паркинг",
      "Дитяча кімната",
      "Оплата картою",
      "Wi-Fi зона",
      "Аптека",
    ],
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
  },
  {
    id: 6,
    name: "Мережа клінік “ПУЛЬС”",
    img: clinicAvatar,
    type: "Приватна клініка",
    chips: [
      "Паркинг",
      "Дитяча кімната",
      "Оплата картою",
      "Wi-Fi зона",
      "Аптека",
    ],
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
  },
];

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
      name: "mobileNum",
      rules: validationRules.mobileNum,
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

export const ICONS_SOCIAL_LIST: {
  icon: ReactNode;
  name: string;
  link: string;
}[] = [
  {
    icon: (
      <Instagram2
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    ),
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    icon: (
      <Youtube
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    ),
    name: "Youtube",
    link: "https://www.youtube.com/",
  },
  {
    icon: (
      <Facebook2
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    ),
    name: "Facebook",
    link: "https://www.facebook.com/",
  },
];
