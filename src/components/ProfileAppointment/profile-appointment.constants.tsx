import doctorAvatar from "../../assets/images/doctor-avatar.png";
import {
  IProfileAppointment,
  IProfileAppointmentDetails,
  IProfileAppointmentDetailsInfoNavigation,
} from "~/common/types-and-interfaces";

export const PROFILE_APPOINTMENT_FILTER_BUTTONS: string[] = [
  "Всі візити",
  "Скасовані",
  "Завершено",
];

export const PROFILE_APPOINTMENT: IProfileAppointment = {
  title: {
    scheduleTitle: "Заплановані записи",
    historyTitle: "Історія записів",
  },
  cards: [
    {
      id: 1,
      avatar: doctorAvatar,
      name: "Князєва Ольга Станіславівна",
      speciality: "Педіатр",
      typeAppointment: "Вільний прийом",
      date: "понеділок, 20-го березня 2023",
      status: "Заплановано",
      info: [
        { title: "Адреса", text: "місто Харків, вул. Олімпійська 3" },
        { title: "Кабінет", text: "507" },
        { title: "Точний час", text: "14:08-14:28" },
        { title: "Тип", text: "Запис за направленням" },
        { title: "Пацієнт", text: "Шевченко Тарас Григорович" },
      ],
    },
    {
      id: 2,
      avatar: doctorAvatar,
      name: "Князєва Ольга Станіславівна",
      speciality: "Педіатр",
      typeAppointment: "Вільний прийом",
      date: "понеділок, 20-го березня 2023",
      status: "Заплановано",
      info: [
        { title: "Адреса", text: "місто Харків, вул. Олімпійська 3" },
        { title: "Кабінет", text: "507" },
        { title: "Точний час", text: "14:08-14:28" },
        { title: "Тип", text: "Запис за направленням" },
        { title: "Пацієнт", text: "Шевченко Тарас Григорович" },
      ],
    },
    {
      id: 3,
      avatar: doctorAvatar,
      name: "Князєва Ольга Станіславівна",
      speciality: "Педіатр",
      typeAppointment: "Вільний прийом",
      date: "понеділок, 20-го березня 2023",
      status: "Завершено",
      info: [
        { title: "Адреса", text: "місто Харків, вул. Олімпійська 3" },
        { title: "Кабінет", text: "507" },
        { title: "Точний час", text: "14:08-14:28" },
        { title: "Тип", text: "Запис за направленням" },
        { title: "Пацієнт", text: "Шевченко Тарас Григорович" },
      ],
    },
    {
      id: 4,
      avatar: doctorAvatar,
      name: "Князєва Ольга Станіславівна",
      speciality: "Педіатр",
      typeAppointment: "Вільний прийом",
      date: "понеділок, 20-го березня 2023",
      status: "Завершено",
      info: [
        { title: "Адреса", text: "місто Харків, вул. Олімпійська 3" },
        { title: "Кабінет", text: "507" },
        { title: "Точний час", text: "14:08-14:28" },
        { title: "Тип", text: "Запис за направленням" },
        { title: "Пацієнт", text: "Шевченко Тарас Григорович" },
      ],
    },
    {
      id: 5,
      avatar: doctorAvatar,
      name: "Князєва Ольга Станіславівна",
      speciality: "Педіатр",
      typeAppointment: "Вільний прийом",
      date: "понеділок, 20-го березня 2023",
      status: "Скасовано",
      info: [
        { title: "Адреса", text: "місто Харків, вул. Олімпійська 3" },
        { title: "Кабінет", text: "507" },
        { title: "Точний час", text: "14:08-14:28" },
        { title: "Тип", text: "Запис за направленням" },
        { title: "Пацієнт", text: "Шевченко Тарас Григорович" },
      ],
    },
    {
      id: 6,
      avatar: doctorAvatar,
      name: "Князєва Ольга Станіславівна",
      speciality: "Педіатр",
      typeAppointment: "Вільний прийом",
      date: "понеділок, 20-го березня 2023",
      status: "Завершено",
      info: [
        { title: "Адреса", text: "місто Харків, вул. Олімпійська 3" },
        { title: "Кабінет", text: "507" },
        { title: "Точний час", text: "14:08-14:28" },
        { title: "Тип", text: "Запис за направленням" },
        { title: "Пацієнт", text: "Шевченко Тарас Григорович" },
      ],
    },
  ],
};

export const PROFILE_APPOINTMENT_DETAILS_INFO: IProfileAppointmentDetails = {
  visitInfo: [
    {
      title: "Вхідне направлення",
      subtitle: "Консультація педіатра ",
      code: "K6022",
      details: [
        {
          title: "Програма",
          text: "Програма медичних гарантій",
        },
        {
          title: "Термін дії",
          text: "10 бер 2023 - 10 бер 2024",
        },
        {
          title: "Направлення створене",
          text: "Князєва Ольга Станіславівна КПН МП “КВ 5”",
        },
        {
          title: "Номер групи направлення",
          text: "2412-4532-3423-4321",
        },
      ],
    },
    {
      title: "Причини звернення",
      details: [
        {
          title: "Причина 1",
          text: "Біль у горлі та підвищена температура тіла",
        },
        {
          title: "Причина 2",
          text: "Нудота",
        },
      ],
    },
    {
      title: "Встановлені діагнози",
      // details: [
      //   {
      //     title: "Осноний діагноз",
      //     text: "Гостра респіраторна вірусна інфекція",
      //   },
      // ],
    },
    {
      title: "Послуги",
      details: [
        {
          title: "Консультація педіатра",
        },
        {
          title: "Біль у горлі та підвищена температура тіла",
        },
      ],
    },
    {
      title: "Призначення",
      details: [
        {
          text: "Постільний режим",
        },
      ],
    },
  ],
  medicalRecords: [
    {
      title: "Спостереження",
      details: [
        {
          title: "Спостереження 1",
          text: "Висипи на тілі",
        },
      ],
    },
  ],
};

