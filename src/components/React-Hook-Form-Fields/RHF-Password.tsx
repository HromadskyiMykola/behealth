import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { PasswordInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFPasswordInput = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="password"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.password}
      render={({ field }) => (
        <PasswordInput
          {...otherProps}
          label="Новий пароль*"
          placeholder="123qwe!@#QWE"
          {...field}
          error={!!errors.password}
          helperText={errors.password?.message || " "}
        />
      )}
    />
  );
};
