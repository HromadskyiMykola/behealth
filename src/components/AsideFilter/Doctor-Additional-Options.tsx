import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const DoctorAdditionalOptions = () => {
  const { filterOptions, handleCheck } = useDataContext();

  return (
    <OptionsWrapper label="Додаткові опції">
      <CheckBoxOption
        name="doctorAcceptsDeclarations"
        label={filterOptions.doctorAcceptsDeclarations.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="doctorWorksWithEHR"
        label={filterOptions.doctorWorksWithEHR.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="onlineConsultation"
        label={filterOptions.onlineConsultation.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="admissionOfChildren"
        label={filterOptions.admissionOfChildren.title}
        onChange={handleCheck}
      />
    </OptionsWrapper>
  );
};
