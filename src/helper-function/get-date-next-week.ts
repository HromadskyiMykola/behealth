import dayjs from "dayjs";

const daysOfWeek = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const months = [
  "Січ",
  "Лют",
  "Бер",
  "Квіт",
  "Трав",
  "Черв",
  "Лип",
  "Сер",
  "Вер",
  "Жовт",
  "Лист",
  "Гру",
];

export const GetDateNextWeek = () => {
  const currentDate = dayjs();
  const datesForWeek = [];
  for (let i = 0; i < 7; i++) {
    const date = currentDate.add(i, "day");
    const dayOfWeek = daysOfWeek[date.day()];
    const month = months[date.month()];
    const dayOfMonth = date.date();
    const formattedDate = date.format("DD.MM.YYYY");
    const dateInfo = { dayOfWeek, month, dayOfMonth, formattedDate };
    datesForWeek.push(dateInfo);
  }
  return datesForWeek;
};
