import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const ClinicType = () => {
  const { selectedFilters, handleFilterChange } = useDataContext();

  const { stateClinic, privateClinic } = selectedFilters;

  return (
    <OptionsWrapper label="Тип медичного закладу">
      <CheckBoxOption
        label={stateClinic.title}
        checked={stateClinic.val}
        onChange={(e, checked) => handleFilterChange("stateClinic", checked)}
      />

      <CheckBoxOption
        label={privateClinic.title}
        checked={privateClinic.val}
        onChange={(e, checked) => handleFilterChange("privateClinic", checked)}
      />
    </OptionsWrapper>
  );
};
