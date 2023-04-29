import { Ref, forwardRef } from "react";
import {
  FormControl,
  FormHelperText,
  Select,
  SelectProps,
  Typography,
  useTheme,
} from "@mui/material";

import { KeyboardArrowDown } from "@mui/icons-material";

type SelectWithPlaceholderProps = SelectProps & { helperText?: string };

const styleHelperText = {
  position: "absolute",
  top: "80px",
  width: "calc(100% - 30px)",
  fontSize: "12px",
  lineHeight: "1.25",
};

function CustomSelect(
  props: SelectWithPlaceholderProps,
  ref: Ref<HTMLDivElement>
) {
  const {
    sx,
    fullWidth,
    helperText,
    placeholder,
    label,
    children,
    ...otherProps
  } = props;
  const { palette, typography } = useTheme();

  const styleSelect = {
    mb: helperText && "18px",
    "& .MuiSelect-select .notranslate::after": placeholder
      ? {
          content: `"${placeholder}"`,
          opacity: 0.42,
        }
      : {},
  };

  return (
    <FormControl sx={sx} fullWidth={fullWidth}>
      {label && (
        <Typography
          pl="16px"
          mb="8px"
          color={palette.custom.neutral40}
          variant="body2"
        >
          {label}
        </Typography>
      )}

      <Select
        {...otherProps}
        MenuProps={{
          sx: {
            "& .MuiMenuItem-root": {
              ...typography.body2,
            },
          },
        }}
        sx={styleSelect}
        IconComponent={KeyboardArrowDown}
      >
        {children}
      </Select>

      <FormHelperText error sx={styleHelperText}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}

export const SelectWithPlaceholder = forwardRef(CustomSelect);
