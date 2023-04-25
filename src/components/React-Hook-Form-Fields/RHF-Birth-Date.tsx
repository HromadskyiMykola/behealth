import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

import { DatePickerInput } from "../atomic";

import { TAuthFormValues } from "~/common";

type Props = TextFieldProps & {
  defaultValue?: string;

  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
};

export const RHFBirthDate = ({
  defaultValue = "",
  control,
  errors,
  ...otherProps
}: Props) => {
  return (
    <Controller
      name="birthDate"
      control={control}
      defaultValue={defaultValue}
      rules={{ required: true }}
      render={({ field }) => (
        <DatePickerInput
          {...otherProps}
          label="Дата народження*"
          {...field}
          onChange={field.onChange}
          // helperText={errors.birthDate && "Вкажіть дату"}
        />
      )}
    />
  );
};
