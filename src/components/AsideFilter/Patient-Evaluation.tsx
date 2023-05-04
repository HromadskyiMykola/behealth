import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const PatientEvaluation = () => {
  const { filterOptions, handleCheck } = useDataContext();

  return (
    <OptionsWrapper label="Оцінювання пацієнтами">
      <CheckBoxOption
        name="evaluationNo"
        label={filterOptions.evaluationNo.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="evaluationNormally"
        label={filterOptions.evaluationNormally.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="evaluationGood"
        label={filterOptions.evaluationGood.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="evaluationVeryGood"
        label={filterOptions.evaluationVeryGood.title}
        onChange={handleCheck}
      />
    </OptionsWrapper>
  );
};
