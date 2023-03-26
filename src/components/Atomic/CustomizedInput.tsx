import { forwardRef, Ref } from "react";
import {
  Typography,
  FormControl,
  TextField,
  OutlinedTextFieldProps,
  styled,
  InputAdornmentProps,
} from "@mui/material";

export type CustomizedInputProps = Pick<
  OutlinedTextFieldProps,
  Exclude<keyof OutlinedTextFieldProps, "variant">
> & {
  label?: string;
  // InputAdornment?: boolean;
  // InputAdornmentProps?: InputAdornmentProps;
};

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

function CustomizedInput(
  props: CustomizedInputProps,
  ref: Ref<HTMLDivElement>
) {
  const { label, ...otherProps } = props;

  return (
    <>
      {label && (
        <Typography
          sx={{ pl: "16px", mb: "8px", color: "#5C5F5D" }}
          variant="body2"
        >
          {label}
        </Typography>
      )}
      <CustomTextField {...otherProps} variant="outlined" ref={ref} />
    </>
  );
}

export default forwardRef(CustomizedInput);
