import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, Grid, InputLabel, MenuItem, Typography } from "@mui/material";
import CustomizedInput from "../../Atomic/CustomizedInput";
import ReactHookFormSelect from "../../Atomic/ReactHookFormSelect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box/Box";

interface IFormInput {
  settlement: string;
  type: string;
  house: string;
  apartments: string;
}

const placeholder = "Обрати";

const selectStyle = {
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
const InputForm = () => {
  const { control, handleSubmit, resetField, register } = useForm({
    defaultValues: {
      type: "",
      settlement: "",
      house: "",
      apartments: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  const resetFieldValue = () => {
    resetField("settlement");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} mt="24px" pb="24px">
        <Grid item xs={4}>
          <ReactHookFormSelect
            name="type"
            label={`Тип`}
            control={control}
            defaultValue={""}
            variant="outlined"
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            sx={selectStyle}
          >
            <MenuItem value="var 1">var 1</MenuItem>
            <MenuItem value="var 2">var 2</MenuItem>
            <MenuItem value="var 3">var 3</MenuItem>
          </ReactHookFormSelect>
        </Grid>
        <Grid item xs={8}>
          <Controller
            name="settlement"
            control={control}
            render={({ field }) => (
              <CustomizedInput
                label="Введіть населений пункт та вулицю"
                placeholder="Введіть населений пункт та вулицю"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="house"
            control={control}
            render={({ field }) => (
              <CustomizedInput
                label="Введіть населений пункт та вулицю"
                placeholder="Введіть населений пункт та вулицю"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="apartments"
            control={control}
            render={({ field }) => (
              <CustomizedInput
                label="Введіть населений пункт та вулицю"
                placeholder="Введіть населений пункт та вулицю"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Box display="flex" flexDirection="row" gap="24px">
        <Button variant="text" onClick={resetFieldValue}>
          Відмінити
        </Button>
        <Button variant="contained" type="submit">
          Зберегти
        </Button>
      </Box>
    </form>
  );
};

export default InputForm;
