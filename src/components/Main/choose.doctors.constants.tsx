import React from "react";
import {
  Baby,
  Ear,
  Hand,
  HeartPulse,
  Stethoscope,
  Syringe,
  Tablets,
} from "lucide-react";
import { Gynecologist } from "../../assets/random/Gynecologist";
import { Gastroenterologist } from "../../assets/random/Gastroenterologist";
import { IChooseDoctor } from "../../common/types-and-interfaces";

export const CHOOSE_DOCTORS_LIST: IChooseDoctor[] = [
  {
    id: 1,
    icon: <Ear color={"#F4FFF8"} width={36} height={36} />,
    name: "Отоларинголог",
    count: 125,
  },
  {
    id: 2,
    icon: <Baby color={"#F4FFF8"} width={36} height={36} />,
    name: "Лікар Педіатр",
    count: 40,
  },
  {
    id: 3,
    icon: (
      <Gynecologist
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    ),
    name: "Гінеколог",
    count: 286,
  },
  {
    id: 4,
    icon: <Stethoscope color={"#F4FFF8"} width={36} height={36} />,
    name: "Сімейний лікар",
    count: 286,
  },
  {
    id: 5,
    icon: <HeartPulse color={"#F4FFF8"} width={36} height={36} />,
    name: "Кардіолог",
    count: 141,
  },
  {
    id: 6,
    icon: <Hand color={"#F4FFF8"} width={36} height={36} />,
    name: "Дерматовенеролог",
    count: 148,
  },
  {
    id: 7,
    icon: <Syringe color={"#F4FFF8"} width={36} height={36} />,
    name: "Терапевт",
    count: 263,
  },
  {
    id: 8,
    icon: (
      <Gastroenterologist
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    ),
    name: "Гастроентеролог",
    count: 113,
  },
  {
    id: 9,
    icon: <Tablets color={"#F4FFF8"} width={36} height={36} />,
    name: "Психіатр",
    count: 81,
  },
];
