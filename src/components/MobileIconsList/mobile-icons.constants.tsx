import Kyivstar from "../../assets/CustomIcon/Kyivstar";
import Life from "../../assets/CustomIcon/Life";
import { Vodafone } from "../../assets/CustomIcon/Vodafone";
import React from "react";

export const CONTACT_PHONES_KYIVSTAR: { icon: JSX.Element; phone: string } = {
  icon: (
    <Kyivstar
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    />
  ),
  phone: "(067) 35 337 27",
};

export const CONTACT_PHONES_LIFE: { icon: JSX.Element; phone: string } = {
  icon: (
    <Life
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    />
  ),
  phone: "(073) 35 337 27",
};

export const CONTACT_PHONES_VODAFON: { icon: JSX.Element; phone: string } = {
  icon: <Vodafone />,
  phone: "(095) 35 337 27",
};
