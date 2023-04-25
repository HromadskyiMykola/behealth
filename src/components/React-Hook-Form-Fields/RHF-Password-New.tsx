import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { PasswordInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFPasswordNew = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="passwordNew"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.passwordNew}
      render={({ field }) => (
        <PasswordInput
          {...otherProps}
          label="Новий пароль*"
          placeholder="123qwe!@#QWE"
          {...field}
          error={!!errors.passwordNew}
          helperText={errors.passwordNew?.message || " "}
        />
      )}
    />
  );
};
