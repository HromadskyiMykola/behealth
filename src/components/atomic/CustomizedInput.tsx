import { forwardRef, Ref } from "react";
import {
  Typography,
  TextField,
  useTheme,
  FormControl,
  TextFieldProps,
} from "@mui/material";

function CustomInput(props: TextFieldProps, ref: Ref<HTMLDivElement>) {
  const { label, ...otherProps } = props;
  const { custom } = useTheme().palette;

  return (
    <FormControl fullWidth>
      {label && (
        <Typography pl="16px" mb="8px" color={custom.neutral40} variant="body2">
          {label}
        </Typography>
      )}
      <TextField
        {...otherProps}
        ref={ref}
        FormHelperTextProps={{
          sx: {
            width: "calc(100% - 30px)",
            fontSize: "12px",
            lineHeight: "1.25",
          },
        }}
      />
    </FormControl>
  );
}

export const CustomizedInput = forwardRef(CustomInput);
