import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const PaymentForServices = () => {
  const { selectedFilters, handleFilterChange } = useDataContext();

  const { admissionByReferral, admissionByNHSU, admissionPaid } =
    selectedFilters;

  return (
    <OptionsWrapper label="Оплата послуг">
      <CheckBoxOption
        label={admissionByReferral.title}
        checked={admissionByReferral.val}
        onChange={(e, checked) =>
          handleFilterChange("admissionByReferral", checked)
        }
      />

      <CheckBoxOption
        label={admissionByNHSU.title}
        checked={admissionByNHSU.val}
        onChange={(e, checked) =>
          handleFilterChange("admissionByNHSU", checked)
        }
      />

      <CheckBoxOption
        label={admissionPaid.title}
        checked={admissionPaid.val}
        onChange={(e, checked) => handleFilterChange("admissionPaid", checked)}
      />
    </OptionsWrapper>
  );
};
