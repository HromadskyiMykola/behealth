import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { InputMobileNum  } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFmobileNum = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="mobileNum"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.mobileNum}
      render={({ field }) => (
        <InputMobileNum 
          {...otherProps}
          label="Номер телефону*"
          placeholder="+38 (XXX) XXX XX XX"
          {...field}
          error={!!errors.mobileNum}
          helperText={errors.mobileNum?.message || " "}
        />
      )}
    />
  );
};
