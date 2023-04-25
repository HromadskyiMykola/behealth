import { Controller, Control, FieldErrors, FieldValues } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { PasswordInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFPasswordCurrent = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="passwordCurrent"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.passwordCurrent}
      render={({ field }) => (
        <PasswordInput
          {...otherProps}
          label="Поточний пароль*"
          placeholder="Введіть пароль"
          {...field}
          error={!!errors.passwordCurrent}
          helperText={errors.passwordCurrent?.message || " "}
        />
      )}
    />
  );
};
