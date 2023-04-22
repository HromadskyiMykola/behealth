import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { PasswordInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFLoginPassword = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="loginPassword"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.loginPassword}
      render={({ field }) => (
        <PasswordInput
          {...otherProps}
          label="Поточний пароль*"
          placeholder="Введіть пароль"
          {...field}
          error={!!errors.loginPassword}
          helperText={errors.loginPassword?.message || " "}
        />
      )}
    />
  );
};
