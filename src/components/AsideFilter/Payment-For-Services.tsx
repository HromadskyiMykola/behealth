import { SyntheticEvent } from "react";

import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const PaymentForServices = () => {
  const { handleFilterChange } = useDataContext();

  const handleCheck = (e: SyntheticEvent<Element, Event>, checked: boolean) => {
    const input = e.target as HTMLInputElement;
    const { name } = input;

    if (name === "Безкоштовно за направленням") {
      handleFilterChange("admissionByReferral", checked, name);
    }
    if (name === "Безкоштовно за декларацією НСЗУ") {
      handleFilterChange("admissionByNHSU", checked, name);
    }
    if (name === "Платний прийом") {
      handleFilterChange("admissionPaid", checked, name);
    }
  };

  return (
    <OptionsWrapper label="Оплата послуг">
      <CheckBoxOption
        label="Безкоштовно за направленням" onChange={handleCheck} />

      <CheckBoxOption
        label="Безкоштовно за декларацією НСЗУ" onChange={handleCheck} />

      <CheckBoxOption label="Платний прийом" onChange={handleCheck} />
    </OptionsWrapper>
  );
};
