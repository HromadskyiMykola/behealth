import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const DoctorAdditionalOptions = () => {
  return (
    <OptionsWrapper label="Додаткові опції">
      <CheckBoxOption label="Лікар приймає декларації" />

      <CheckBoxOption label="Лікар працює з eHealth (ЕСОЗ)" />

      <CheckBoxOption label="Онлайн консультація" />

      <CheckBoxOption label="Прийом дітей" />

      <CheckBoxOption label="Приватна клініка" />
    </OptionsWrapper>
  );
};
