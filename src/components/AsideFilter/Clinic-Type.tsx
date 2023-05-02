import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const ClinicType = () => {
  return (
    <OptionsWrapper label="Тип медичного закладу">
      <CheckBoxOption label="Державна клініка" />

      <CheckBoxOption label="Приватна клініка" />
    </OptionsWrapper>
  );
};
