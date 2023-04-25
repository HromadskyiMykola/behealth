import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { CustomizedInput } from "~/components/atomic/CustomizedInput";
import Box from "@mui/material/Box/Box";
import { TEXT_ADDRESSES_EDIT_FORM } from "~/components/tads.additionalData/const-additional-data";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SelectWithPlaceholder } from "~/components/atomic";
import { useApiService } from "~/common";
import { useAuthProvider } from "~/providers";
import { useNavigate } from "react-router-dom";
import { ERouteNames } from "~/routes/routeNames";

interface IFormInput {
  settlement: string;
  address_type: string;
  house: string;
  apartments: string;
}

const schema = yup
  .object({
    address_type: yup.string().required("Поле не може бути пустим"),
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
      .matches(/^\d+(\/\d+)?$/, "Можуть бути використані тільки цифри і /"),
    apartments: yup
      .string()
      .max(5, "Має бути не більше 5 символів")
      .matches(/^\d+(\/\d+)?$/, "Можуть бути використані тільки цифри і /"),
  })
  .required();

const TEXT_CHOICES = TEXT_ADDRESSES_EDIT_FORM.addresses;
const TEXT_BUTTONS = TEXT_ADDRESSES_EDIT_FORM.button;

// todo add type for props function
export const AddressesForm = ({
  closeEditForm,
  valuePatientAdditionData,
}: any) => {
  function replaceNullWithUndefined(obj: { [key: string]: any }): void {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key] === null) {
          obj[key] = undefined;
        } else if (typeof obj[key] === "object") {
          replaceNullWithUndefined(obj[key]);
        }
      }
    }
  }
  const test = replaceNullWithUndefined(valuePatientAdditionData);
  const {
    control,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      //   //todo  "SomeText" change dataProps
      address_type: "",
      settlement: "",
      house: "",
      apartments: "",
    },
    resolver: yupResolver(schema),
  });
  const { patient } = useApiService();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    patient.additionalInfo.create({
      type: "address",
      ...data,
    });
    resetFieldValue();
  };
  const resetFieldValue = () => {
    resetField("address_type");
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
          <Controller
            name="address_type"
            control={control}
            render={({ field }) => (
              <SelectWithPlaceholder
                sx={{ width: "100%" }}
                placeholder={TEXT_CHOICES.placeholder.select}
                label={TEXT_CHOICES.title.select}
                {...field}
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
              </SelectWithPlaceholder>
            )}
          />
          <Typography variant="body2" color="error" component="p" mt={1} pl={2}>
            {errors.address_type?.message}
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
