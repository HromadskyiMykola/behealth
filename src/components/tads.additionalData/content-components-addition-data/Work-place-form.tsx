import React from "react";
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
import { SelectWithoutPlaceholder } from "~/components/atomic";

interface IFormInput {
  type: string;
  addresses: string;
  position: string;
}

const schema = yup
  .object({
    type: yup.string().required("Поле не може бути пустим"),
    addresses: yup
      .string()
      .required("Поле не може бути пустим")
      .max(100, "Максимальна кількість символів 100")
      .matches(
        /^[А-Яа-я,.\-();\s]+$/,
        "Дозволенна тільки кирилиця і спецсимволи -()"
      ),
    position: yup
      .string()
      .required("Поле не може бути пустим")
      .max(15, "Має бути не більше 15 символів")
      .matches(/^[А-Яа-я\s]+$/, "Дозволенна тільки кирилиця"),
  })
  .required();

const placeholder = "Обрати";

const TEXT_CHOICES = TEXT_ADDRESSES_EDIT_FORM.workPlace;
const TEXT_BUTTONS = TEXT_ADDRESSES_EDIT_FORM.button;

// todo add type for props function
export const WorkPlaceForm = ({ closeEditForm }: any) => {
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      //todo  "SomeText" change dataProps
      type: "",
      addresses: "" || "SomeText",
      position: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  const resetFieldValue = () => {
    resetField("type");
    resetField("addresses");
    resetField("position");
  };

  const onClickCancel = () => {
    resetFieldValue();
    closeEditForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} mt="24px" pb="24px">
        <Grid item xs={4}>
          {/*<ReactHookFormSelect*/}
          {/*  name="type"*/}
          {/*  label={TEXT_CHOICES.title.select}*/}
          {/*  control={control}*/}
          {/*  variant="outlined"*/}
          {/*  displayEmpty*/}
          {/*  IconComponent={KeyboardArrowDownIcon}*/}
          {/*  sx={selectStyle}*/}
          {/*>*/}
          {/*  {TEXT_CHOICES.selectOptions.map((item: string) => {*/}
          {/*    return (*/}
          {/*      <MenuItem value={item} key={`${item}-label`}>*/}
          {/*        <Typography component="p" variant="subtitle2">*/}
          {/*          {item}*/}
          {/*        </Typography>*/}
          {/*      </MenuItem>*/}
          {/*    );*/}
          {/*  })}*/}
          {/*</ReactHookFormSelect>*/}
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <SelectWithoutPlaceholder
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
              </SelectWithoutPlaceholder>
            )}
          />
          <Typography variant="body2" color="error" component="p" mt={1} pl={2}>
            {errors.type?.message}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="addresses"
            control={control}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.addresses}
                placeholder={TEXT_CHOICES.placeholder.addresses}
                {...field}
              />
            )}
          />
          <Typography variant="body2" color="error" component="p" mt={1} pl={2}>
            {errors.addresses?.message}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.position}
                placeholder={TEXT_CHOICES.placeholder.position}
                {...field}
              />
            )}
          />
          <Typography variant="body2" color="error" component="p" mt={1} pl={2}>
            {errors.position?.message}
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
