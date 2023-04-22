import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { CustomizedInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFTin = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="tin" // TODO:
      control={control}
      defaultValue={defaultValue}
      // TODO:     rules={validationRules.middleName}
      render={({ field }) => (
        <CustomizedInput
          {...otherProps}
          label="Номер*"
          placeholder="Номер запису ІПН"
          {...field}
          // TODO:       error={!!errors.middleName}
          helperText={errors.middleName?.message || " "}
        />
      )}
    />
  );
};
