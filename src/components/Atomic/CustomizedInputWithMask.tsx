import { forwardRef, Ref } from "react";
import InputMask from "react-input-mask";

import {
  Typography,
  TextField,
  OutlinedTextFieldProps,
  styled,
  FormControl,
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


// ...


function CustomInput(props: CustomizedInputProps, ref: Ref<HTMLDivElement>) {
  const { label, placeholder, ...otherProps } = props;

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
      {placeholder && placeholder.startsWith("+38") ? (
        <InputMask
          mask="+38 (999) 99 999 99"
          {...otherProps}
          onChange={otherProps.onChange}
          render={(inputProps: any, ref: any) => (
     <></>
            // <CustomTextField
            //   placeholder={placeholder}
            //   variant="outlined"
            //   inputRef={ref}
            //   {...inputProps}
            //   FormHelperTextProps={{
            //     sx: {
            //       width: "calc(100% - 30px)",
            //       fontSize: "12px",
            //       lineHeight: "1.25",
            //     },
            //   }}
            // />
          )}
        />
      ) : (
        <CustomTextField
          placeholder={placeholder}
          {...otherProps}
          variant="outlined"
          ref={ref}
          FormHelperTextProps={{
            sx: {
              width: "calc(100% - 30px)",
              fontSize: "12px",
              lineHeight: "1.25",
            },
          }}
        />
      )}
    </FormControl>
  );
}