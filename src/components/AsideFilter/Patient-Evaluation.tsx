import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const PatientEvaluation = () => {
  const { selectedFilters, handleFilterChange } = useDataContext();

  const {
    evaluationNo,
    evaluationNormally,
    evaluationGood,
    evaluationVeryGood,
  } = selectedFilters;

  return (
    <OptionsWrapper label="Оцінювання пацієнтами">
      <CheckBoxOption
        label={evaluationNo.title}
        checked={evaluationNo.val}
        onChange={(e, checked) => handleFilterChange("evaluationNo", checked)}
      />

      <CheckBoxOption
        label={evaluationNormally.title}
        checked={evaluationNormally.val}
        onChange={(e, checked) =>
          handleFilterChange("evaluationNormally", checked)
        }
      />

      <CheckBoxOption
        label={evaluationGood.title}
        checked={evaluationGood.val}
        onChange={(e, checked) => handleFilterChange("evaluationGood", checked)}
      />

      <CheckBoxOption
        label={evaluationVeryGood.title}
        checked={evaluationVeryGood.val}
        onChange={(e, checked) =>
          handleFilterChange("evaluationVeryGood", checked)
        }
      />
    </OptionsWrapper>
  );
};
