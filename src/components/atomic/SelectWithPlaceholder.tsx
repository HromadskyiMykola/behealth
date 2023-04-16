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
  width: "calc(100% - 30px)",
  fontSize: "12px",
  lineHeight: "1.25",
};

function CustomSelect(
  props: SelectWithPlaceholderProps,
  ref: Ref<HTMLDivElement>
) {
  const { helperText, placeholder, label, children, ...otherProps } = props;
  const { custom } = useTheme().palette;

  const styleSelect = {
    "& .MuiSelect-select .notranslate::after": placeholder
      ? {
          content: `"${placeholder}"`,
          opacity: 0.42,
        }
      : {},
  };

  return (
    <FormControl fullWidth>
      {label && (
        <Typography pl="16px" mb="8px" color={custom.neutral40} variant="body2">
          {label}
        </Typography>
      )}

      <Select
        {...otherProps}
        sx={styleSelect}
        IconComponent={KeyboardArrowDown}
      >
        {children}
      </Select>

      <FormHelperText sx={styleHelperText}>{helperText}</FormHelperText>
    </FormControl>
  );
}

export const SelectWithPlaceholder = forwardRef(CustomSelect);
