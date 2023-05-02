import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const GenderOfDoctor = () => {
  return (
    <OptionsWrapper label="Стать лікаря">
      <CheckBoxOption label="Чоловік" />

      <CheckBoxOption label="Жінка" />
    </OptionsWrapper>
  );
};
