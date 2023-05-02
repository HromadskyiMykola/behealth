import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const PatientEvaluation = () => {
  return (
    <OptionsWrapper label="Оцінювання пацієнтами">
      <CheckBoxOption label="Без оцінювань" />

      <CheckBoxOption label="Нормально" />

      <CheckBoxOption label="Добре" />

      <CheckBoxOption label="Дуже добре" />
    </OptionsWrapper>
  );
};
