import { SyntheticEvent } from "react";

import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const DoctorAdditionalOptions = () => {
  const { handleFilterChange } = useDataContext();

  const handleCheck = (e: SyntheticEvent<Element, Event>, checked: boolean) => {
    const input = e.target as HTMLInputElement;
    const { name } = input;

    if (name === "Лікар приймає декларації") {
      handleFilterChange("doctorAcceptsDeclarations", checked, name);
    }
    if (name === "Лікар працює з eHealth (ЕСОЗ)") {
      handleFilterChange("doctorWorksWithEHR", checked, name);
    }

    if (input.name === "Онлайн консультація") {
      handleFilterChange("onlineConsultation", checked, name);
    }
    if (name === "Прийом дітей") {
      handleFilterChange("admissionOfChildren", checked, name);
    }
  };

  return (
    <OptionsWrapper label="Додаткові опції">
      <CheckBoxOption label="Лікар приймає декларації" onChange={handleCheck} />

      <CheckBoxOption
        label="Лікар працює з eHealth (ЕСОЗ)"
        onChange={handleCheck}
      />

      <CheckBoxOption label="Онлайн консультація" onChange={handleCheck} />

      <CheckBoxOption label="Прийом дітей" onChange={handleCheck} />
    </OptionsWrapper>
  );
};
