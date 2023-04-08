import { Ref, forwardRef } from "react";
import {
  FormControl,
  FormHelperText,
  Select,
  SelectProps,
  Typography,
} from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

type SelectWithoutPlaceholderProps = SelectProps & { helperText?: string };

const styleHelperText = {
  width: "calc(100% - 30px)",
  fontSize: "12px",
  lineHeight: "1.25",
};

function CustomSelect(
  props: SelectWithoutPlaceholderProps,
  ref: Ref<HTMLDivElement>
) {
  const { helperText, placeholder, label, children, ...otherProps } = props;

  const styleSelect = {
    padding: "12px 16px",
    borderRadius: "8px",
    "& .MuiOutlinedInput-input": { p: 0 },
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
        <Typography pl="16px" mb="8px" color="#5C5F5D" variant="body2">
          {label}
        </Typography>
      )}

      <Select {...otherProps} sx={styleSelect} IconComponent={KeyboardArrowUp}>
        {children}
      </Select>

      <FormHelperText sx={styleHelperText}>{helperText}</FormHelperText>
    </FormControl>
  );
}

export const SelectWithoutPlaceholder = forwardRef(CustomSelect);
