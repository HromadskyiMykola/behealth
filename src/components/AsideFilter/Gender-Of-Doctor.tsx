import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const GenderOfDoctor = () => {
  const { filterOptions, handleCheck } = useDataContext();

  return (
    <OptionsWrapper label="Стать лікаря">
      <CheckBoxOption
        name="male"
        label={filterOptions.male.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="female"
        label={filterOptions.female.title}
        onChange={handleCheck}
      />
    </OptionsWrapper>
  );
};
