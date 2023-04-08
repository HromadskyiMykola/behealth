import { forwardRef, Ref } from "react";
import {
  Typography,
  TextField,
  styled,
  FormControl,
  TextFieldProps,
} from "@mui/material";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "12px 16px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "8px",
      // borderColor: colorGrey,
      // borderColor: theme.palette.primary.main,
      // backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    },
    // "&:hover fieldset": {
    //   borderColor: "yellow",
    // },
    // "&.Mui-focused fieldset": {
    //   borderColor: "green",
    // },
  },
});

function CustomInput(props: TextFieldProps, ref: Ref<HTMLDivElement>) {
  const { label, ...otherProps } = props;

  return (
    <FormControl fullWidth>
      {label && (
        <Typography pl="16px" mb="8px" color="#5C5F5D" variant="body2">
          {label}
        </Typography>
      )}
      <CustomTextField
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
