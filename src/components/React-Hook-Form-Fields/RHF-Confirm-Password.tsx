import {
  Controller,
  Control,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";

import { TextFieldProps } from "@mui/material";

import { PasswordInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
  watch: UseFormWatch<TAuthFormValues>;
};

export const RHFConfirmPassword = ({
  defaultValue = "",
  control,
  errors,
  watch,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="confirmPassword"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.confirmPassword(watch("password"))}
      render={({ field }) => (
        <PasswordInput
          {...otherProps}
          label="Повторіть новий пароль*"
          placeholder="123qwe!@#QWE"
          {...field}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message || " "}
        />
      )}
    />
  );
};
