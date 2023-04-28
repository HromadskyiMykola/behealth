import { useForm, Controller } from "react-hook-form";

import { Button, Grid, MenuItem, Typography, Stack } from "@mui/material";

import {
  TOnSubmitAdditionalData,
  TPatientAdditionalData,
  validationRules,
} from "~/common";

import { CustomizedInput } from "~/components/atomic/Customized-Input";
import { SelectWithPlaceholder } from "~/components/atomic";
import { TEXT_ADDRESSES_EDIT_FORM } from "~/components/tads.additionalData/const-additional-data";

interface Props {
  onSubmitAdditionalData: TOnSubmitAdditionalData;
  patientAdditionalData: TPatientAdditionalData | null;
  closeEditFrom: () => void;
}

const TEXT_CHOICES = TEXT_ADDRESSES_EDIT_FORM.addresses;
const TEXT_BUTTONS = TEXT_ADDRESSES_EDIT_FORM.button;

export const AddressInputForm = ({
  onSubmitAdditionalData,
  patientAdditionalData,
  closeEditFrom,
}: Props) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TPatientAdditionalData>({
    defaultValues: {
      settlementType: patientAdditionalData?.settlementType || "Місце прописки",
      settlementAndStr: patientAdditionalData?.settlementAndStr || "",
      houseNum: patientAdditionalData?.houseNum || "",
      apartmentNum: patientAdditionalData?.apartmentNum || "",
    },
  });

  const onSubmit = (data: TPatientAdditionalData) => {
    const isNeedCreateData = !patientAdditionalData?.settlementType;

    onSubmitAdditionalData({ ...data, type: "address" }, { isNeedCreateData });

    closeEditFrom();
    reset();
  };

  const onClickCancel = () => {
    closeEditFrom();
    reset();
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={3} m="24px 0">
        <Grid item xs={4}>
          <Controller
            name="settlementType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <SelectWithPlaceholder
                sx={{ width: "100%" }}
                placeholder={TEXT_CHOICES.placeholder.select}
                label={TEXT_CHOICES.title.select}
                {...field}
                error={!!errors.settlementType}
                helperText={errors.settlementType?.message || " "}
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
        </Grid>

        <Grid item xs={8}>
          <Controller
            name="settlementAndStr"
            control={control}
            rules={validationRules.settlementAndStr}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.settlement}
                aria-invalid={errors.settlementAndStr ? "true" : "false"}
                placeholder={TEXT_CHOICES.placeholder.settlement}
                {...field}
                error={!!errors.settlementAndStr}
                helperText={errors.settlementAndStr?.message || " "}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            name="houseNum"
            control={control}
            rules={validationRules.houseNum}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.house}
                placeholder={TEXT_CHOICES.placeholder.house}
                {...field}
                error={!!errors.houseNum}
                helperText={errors.houseNum?.message || " "}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            name="apartmentNum"
            control={control}
            rules={validationRules.apartmentNum}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.apartments}
                placeholder={TEXT_CHOICES.title.apartments}
                {...field}
                error={!!errors.apartmentNum}
                helperText={errors.apartmentNum?.message || " "}
              />
            )}
          />
        </Grid>
      </Grid>

      <Stack direction="row" gap="24px">
        <Button variant="text" onClick={onClickCancel}>
          {TEXT_BUTTONS.cancel}
        </Button>

        <Button variant="contained" type="submit" disabled={!isValid}>
          {TEXT_BUTTONS.submit}
        </Button>
      </Stack>
    </form>
  );
};
