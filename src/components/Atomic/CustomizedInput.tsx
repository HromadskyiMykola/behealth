import { forwardRef, Ref } from "react";
import {
  Typography,
  FormControl,
  TextField,
  OutlinedTextFieldProps,
  styled,
} from "@mui/material";

export type CustomizedInputProps = Pick<
  OutlinedTextFieldProps,
  Exclude<keyof OutlinedTextFieldProps, "variant" | "label">
> & { description?: string };

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
  return (
    <FormControl>
      <Typography
        sx={{ pl: "16px", mb: "8px", color: "#5C5F5D" }}
        variant="body2"
      >
        {props?.description}
      </Typography>
      <CustomTextField {...props} variant="outlined" label="" ref={ref} />
    </FormControl>
  );
}

export default forwardRef(CustomizedInput);
