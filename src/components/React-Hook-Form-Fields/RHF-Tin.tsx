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
      name="tin"
      control={control}
      defaultValue={defaultValue}
      rules={validationRules.tin}
      render={({ field }) => (
        <CustomizedInput
          {...otherProps}
          label="ІПН*"
          placeholder="Номер запису ІПН"
          {...field}
          error={!!errors.tin}
          helperText={errors.tin?.message || " "}
        />
      )}
    />
  );
};
