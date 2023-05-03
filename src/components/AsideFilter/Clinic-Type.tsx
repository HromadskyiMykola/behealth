import { SyntheticEvent } from "react";

import { TAsideFilterComps } from "~/common";
import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const ClinicType = ({
  optionsData,
  handleFilterChange,
}: TAsideFilterComps) => {
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
    <OptionsWrapper label="Тип медичного закладу">
      <CheckBoxOption label="Державна клініка" onChange={handleCheck} />

      <CheckBoxOption label="Приватна клініка" onChange={handleCheck} />
    </OptionsWrapper>
  );
};
