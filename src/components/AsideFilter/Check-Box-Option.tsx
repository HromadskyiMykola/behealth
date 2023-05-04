import {
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
  useTheme,
} from "@mui/material";

export const CheckBoxOption = (
  props: Omit<FormControlLabelProps, "control">
) => {
  const { secondary40 } = useTheme().palette.custom;

  return (
    <FormControlLabel
      {...props}
      name={props.label as string}
      componentsProps={{
        typography: { variant: "caption", color: secondary40 },
      }}
      control={<Checkbox sx={{ mt: "-11px", mb: "-11px" }} />}
    />
  );
};
