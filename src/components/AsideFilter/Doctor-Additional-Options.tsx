import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const DoctorAdditionalOptions = () => {
  const { selectedFilters, handleFilterChange } = useDataContext();

  const {
    doctorAcceptsDeclarations,
    doctorWorksWithEHR,
    onlineConsultation,
    admissionOfChildren,
  } = selectedFilters;

  return (
    <OptionsWrapper label="Додаткові опції">
      <CheckBoxOption
        label={doctorAcceptsDeclarations.title}
        checked={doctorAcceptsDeclarations.val}
        onChange={(e, checked) =>
          handleFilterChange("doctorAcceptsDeclarations", checked)
        }
      />

      <CheckBoxOption
        label={doctorWorksWithEHR.title}
        checked={doctorWorksWithEHR.val}
        onChange={(e, checked) =>
          handleFilterChange("doctorWorksWithEHR", checked)
        }
      />

      <CheckBoxOption
        label={onlineConsultation.title}
        checked={onlineConsultation.val}
        onChange={(e, checked) =>
          handleFilterChange("onlineConsultation", checked)
        }
      />

      <CheckBoxOption
        label={admissionOfChildren.title}
        checked={admissionOfChildren.val}
        onChange={(e, checked) =>
          handleFilterChange("admissionOfChildren", checked)
        }
      />
    </OptionsWrapper>
  );
};
