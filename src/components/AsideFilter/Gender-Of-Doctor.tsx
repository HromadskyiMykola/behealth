import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const GenderOfDoctor = () => {
  const { selectedFilters, handleFilterChange } = useDataContext();

  const { male, female } = selectedFilters;

  return (
    <OptionsWrapper label="Стать лікаря">
      <CheckBoxOption
        label={male.title}
        checked={male.val}
        onChange={(e, checked) => handleFilterChange("male", checked)}
      />

      <CheckBoxOption
        label={female.title}
        checked={female.val}
        onChange={(e, checked) => handleFilterChange("female", checked)}
      />
    </OptionsWrapper>
  );
};
