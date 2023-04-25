import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { CustomizedInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFEmail = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller // EMAIL
      name="email"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.email}
      render={({ field }) => (
        <CustomizedInput
          {...otherProps}
          label="Електронна пошта"
          placeholder="mail@example.com"
          {...field}
          error={!!errors.email}
          helperText={errors.email?.message || " "}
        />
      )}
    />
  );
};
