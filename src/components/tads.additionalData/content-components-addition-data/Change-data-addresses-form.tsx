import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { CustomizedInput } from "~atomic/CustomizedInput";
import { ReactHookFormSelect } from "~atomic/ReactHookFormSelect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box/Box";
import { TEXT_ADDRESSES_EDIT_FORM } from "~/components/tads.additionalData/const-additional-data";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
  settlement: string;
  type: string;
  house: string;
  apartments: string;
}

const schema = yup
  .object({
    type: yup.string().required("Поле не може бути пустим"),
    settlement: yup
      .string()
      .required("Поле не може бути пустим")
      .max(100, "Максимальна кількість символів 100")
      .matches(
        /^[А-Яа-я,.\-();\s]+$/,
        "Дозволенна тільки кирилиця і спецсимволи -()"
      ),
    // todo Тільки цифри 0-9 Можна вживати /
    house: yup
      .string()
      .required("Поле не може бути пустим")
      .max(5, "Має бути не більше 5 символів")
      .matches(/^[0-9\/]+$/, "Можуть бути використані тільки цифри і /"),
    apartments: yup
      .string()
      .max(5, "Має бути не більше 5 символів")
      .matches(/^[0-9\/]+$/, "Можуть бути використані тільки цифри і /"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

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
const TEXT_CHOICES = TEXT_ADDRESSES_EDIT_FORM.addresses;
const TEXT_BUTTONS = TEXT_ADDRESSES_EDIT_FORM.button;

// todo add type for props function
export const ChangeDataAddressesForm = ({ closeEditForm }: any) => {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      //todo  "SomeText" change dataProps
      type: "" || "var1",
      settlement: "" || "SomeText",
      house: "" || "SomeText",
      apartments: "" || "SomeText",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  const resetFieldValue = () => {
    resetField("type");
    resetField("settlement");
    resetField("house");
    resetField("apartments");
  };

  const onClickCancel = () => {
    resetFieldValue();
    closeEditForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} mt="24px" pb="24px">
        <Grid item xs={4}>
          <ReactHookFormSelect
            name="type"
            label={TEXT_CHOICES.title.select}
            control={control}
            variant="outlined"
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            sx={selectStyle}
          >
            {TEXT_CHOICES.selectOptions.map((item: string) => {
              return (
                <MenuItem value={item} key={`${item}-label`}>
                  <Typography component="p" variant="subtitle2">
                    {item}
                  </Typography>
                </MenuItem>
              );
            })}
          </ReactHookFormSelect>
          <Typography variant="body2" color="error" component="p" mt={1} pl={2}>
            {errors.type?.message}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Controller
            name="settlement"
            control={control}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.settlement}
                placeholder={TEXT_CHOICES.placeholder.settlement}
                {...field}
              />
            )}
          />
          <Typography variant="body2" color="error" component="p" mt={1} pl={2}>
            {errors.settlement?.message}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="house"
            control={control}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.house}
                placeholder={TEXT_CHOICES.placeholder.house}
                {...field}
              />
            )}
          />
          <Typography variant="body2" color="error" component="p" mt={1} pl={2}>
            {errors.house?.message}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="apartments"
            control={control}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.apartments}
                placeholder={TEXT_CHOICES.title.apartments}
                {...field}
              />
            )}
          />
          <Typography variant="body2" color="error" component="p" mt={1} pl={2}>
            {errors.apartments?.message}
          </Typography>
        </Grid>
      </Grid>
      <Box display="flex" flexDirection="row" gap="24px">
        <Button variant="text" onClick={onClickCancel}>
          {TEXT_BUTTONS.cancel}
        </Button>
        <Button variant="contained" type="submit">
          {TEXT_BUTTONS.submit}
        </Button>
      </Box>
    </form>
  );
};
