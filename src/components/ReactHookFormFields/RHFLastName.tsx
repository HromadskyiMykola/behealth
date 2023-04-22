import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { CustomizedInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFLastName = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="lastName"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.lastName}
      render={({ field }) => (
        <CustomizedInput
          {...otherProps}
          label="Прізвище*"
          placeholder="Нещадін"
          {...field}
          error={!!errors.lastName}
          helperText={errors.lastName?.message || " "}
        />
      )}
    />
  );
};
