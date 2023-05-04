import { useDataContext } from "~/providers";

import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const PaymentForServices = () => {
  const { filterOptions, handleCheck } = useDataContext();

  return (
    <OptionsWrapper label="Оплата послуг">
      <CheckBoxOption
        name="admissionByReferral"
        label={filterOptions.admissionByReferral.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="admissionByNHSU"
        label={filterOptions.admissionByNHSU.title}
        onChange={handleCheck}
      />

      <CheckBoxOption
        name="admissionPaid"
        label={filterOptions.admissionPaid.title}
        onChange={handleCheck}
      />
    </OptionsWrapper>
  );
};
