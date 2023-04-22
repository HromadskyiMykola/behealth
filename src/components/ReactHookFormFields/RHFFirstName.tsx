import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { CustomizedInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFFirstName = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="firstName"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.firstName}
      render={({ field }) => (
        <CustomizedInput
          {...otherProps}
          label="Ім’я*"
          placeholder="Олександр"
          {...field}
          error={!!errors.firstName}
          helperText={errors.firstName?.message || " "}
        />
      )}
    />
  );
};
