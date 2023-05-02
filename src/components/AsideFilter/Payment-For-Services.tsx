import { OptionsWrapper } from "./";
import { CheckBoxOption } from "./Check-Box-Option";

export const PaymentForServices = () => {
  return (
    <OptionsWrapper label="Оплата послуг">
      <CheckBoxOption label="Безкоштовно за направленням" />

      <CheckBoxOption label="Безкоштовно за декларацією НСЗУ" />

      <CheckBoxOption label="Платний прийом" />
    </OptionsWrapper>
  );
};
