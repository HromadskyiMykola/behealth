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
export const SING_UP = "Записатися";
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
