import { SyntheticEvent } from "react";

import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const GenderOfDoctor = () => {
  const { handleFilterChange } = useDataContext();

  const handleCheck = (e: SyntheticEvent<Element, Event>, checked: boolean) => {
    const input = e.target as HTMLInputElement;
    const { name } = input;

    if (name === "Державна клініка") {
      handleFilterChange("stateClinic", checked, name);
    }
    if (name === "Приватна клініка") {
      handleFilterChange("privateClinic", checked, name);
    }
  };

  return (
    <OptionsWrapper label="Стать лікаря">
      <CheckBoxOption label="Чоловік" onChange={handleCheck}/>

      <CheckBoxOption label="Жінка" onChange={handleCheck}/>
    </OptionsWrapper>
  );
};
