import { ISelectItemHeaderValue } from "~/common";
import { ERouteNames } from "~/routes/routeNames";

export const HEADER_SELECT_ITEM_VALUE: ISelectItemHeaderValue[] = [
  { value: "Cherkasy", text: "Черкаси" },
  { value: "Kyiv", text: "Київ" },
  {
    value: "Termopil",
    text: "Тернопіль",
  },
];
export const MAKE_TO_APPOINTMENT = "Записатися";
export const LINKS = [
  {
    name: "Лікарі",
    path: ERouteNames.DOCTORS,
  },
  {
    name: "Клініки",
    path: ERouteNames.CLINICS,
  },
  {
    name: "Про beHealth",
    path: ERouteNames.ABOUT,
  },
];
export const SING_IN = "Увійти";
export const PERSONAL_CABINET = "Персональний Кабінет";

export const CITY = [
  { title: "Вінниця" },
  {
    title: "Київ",
  },
  {
    title: "Харків",
  },
  {
    title: "Львів",
  },
  {
    title: "Одесса",
  },
  {
    title: "Дніпро",
  },
  {
    title: "Запоріжжя",
  },
  {
    title: "Черкаси",
  },
  {
    title: "Херсон",
  },
];
