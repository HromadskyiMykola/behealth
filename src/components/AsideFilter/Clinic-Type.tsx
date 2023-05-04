import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const ClinicType = () => {
  const { filterOptions, handleCheck } = useDataContext();

  return (
    <OptionsWrapper label="Тип медичного закладу">
      <CheckBoxOption
        name="stateClinic"
        label={filterOptions.stateClinic.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="privateClinic"
        label={filterOptions.privateClinic.title}
        onChange={handleCheck}
      />
    </OptionsWrapper>
  );
};
