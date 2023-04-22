import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { InputMobileNumber } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFMobileNumber = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="mobileNumber"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.mobileNumber}
      render={({ field }) => (
        <InputMobileNumber
          {...otherProps}
          label="Номер телефону*"
          placeholder="+38 (XXX) XXX XX XX"
          {...field}
          error={!!errors.mobileNumber}
          helperText={errors.mobileNumber?.message || " "}
        />
      )}
    />
  );
};
