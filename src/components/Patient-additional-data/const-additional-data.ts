// export const titleCards = [{addresses:"Адреси"}, {workPlace:"Місце роботи"}, {preferentialCategories:"Пільгові категорії"}];
export const titleCards = ["Адреси", "Місце роботи", "Пільгові категорії"];

export const emptyText = [
  "Ви ще не додали свої адреси.",
  "Ви ще не додали свої місця роботи.",
  "Пільгові категорії відсутні.",
];

export const typeContentCars = [
  "Адреса перебування",
  "Основна робота",
  //todo type for Пільгові категорії
  "Тип пільгового",
];

export const TEXT_ADDRESSES_EDIT_FORM = {
  addresses: {
    titleContent: {
      type: "Тип",
      addresses: "Адреса",
      house: "Квартира",
    },
    title: {
      select: "Тип*",
      settlement: "Населений пункт та вулиця*",
      house: "Будинок*",
      apartments: "Квартира",
    },
    placeholder: {
      select: "Обрати",
      settlement: "Введіть населений пункт та вулицю",
      house: "Введіть номер будинку",
      apartments: "Введіть номер квартири",
    },
    selectOptions: ["Основне місце проживання", "Місце прописки"],
  },
  workPlace: {
    titleRestData: {
      type: "Тип",
      addresses: "Адреса",
      other: "Посада",
    },
    title: {
      select: "Тип*",
      addresses: "Місце роботи*",
      position: "Посада*",
    },
    placeholder: {
      select: "Обрати",
      addresses: "Введіть місце роботи",
      position: "Введіть вашу посаду",
    },
    selectOptions: ["Основне", "За сумісництвом)"],
  },
  preferentialCategories: {
    titleRestData: {
      type: "Невідомо",
      addresses: "Невідомо",
      other: "Невідомо",
    },
  },
  button: {
    cancel: "Відмінити",
    submit: "Зберегти",
  },
};
