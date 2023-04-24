import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { CustomizedInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFMiddleName = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="middleName"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.middleName}
      render={({ field }) => (
        <CustomizedInput
          {...otherProps}
          label="По батькові"
          placeholder="Анатолійович"
          {...field}
          error={!!errors.middleName}
          helperText={errors.middleName?.message || " "}
        />
      )}
    />
  );
};
