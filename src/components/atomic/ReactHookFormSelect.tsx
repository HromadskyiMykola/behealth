import React, { ReactNode } from "react";
import { FormControl, Select, SvgIconTypeMap } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IReactHookFormSelect {
  name: string;
  label: string;
  control: any;
  // defaultValue: string;
  children: ReactNode;
  // placeholder,
  props?: any;
  displayEmpty: boolean;
  variant: "outlined" | "standard" | "filled" | undefined;
  IconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  sx: any;
}

export const ReactHookFormSelect = ({
  name,
  label,
  control,
  children,
  // placeholder,
  ...props
}: IReactHookFormSelect) => {
  const labelId = `${name}-label`;

  return (
    <FormControl fullWidth>
      {label && (
        <Typography
          sx={{ pl: "16px", mb: "8px", color: "#5C5F5D" }}
          variant="body2"
        >
          {label}
        </Typography>
      )}
      <Controller
        render={({ field }) => (
          <Select labelId={labelId} {...field} {...props}>
            {/*<MenuItem value="" disabled>*/}
            {/*  <Typography color="#9E9E9E" variant="body2">*/}
            {/*    {placeholder}*/}
            {/*  </Typography>*/}
            {/*</MenuItem>*/}
            {children}
          </Select>
        )}
        name={name}
        control={control}
      />
    </FormControl>
  );
};
