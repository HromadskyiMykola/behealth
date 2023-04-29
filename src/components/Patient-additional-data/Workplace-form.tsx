import { useForm, Controller } from "react-hook-form";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { CustomizedInput } from "~/components/atomic/Customized-Input";
import { TEXT_ADDRESSES_EDIT_FORM } from "./const-additional-data";

import { SelectWithPlaceholder } from "~/components/atomic";
import {
  IOnSubmitPatientData,
  TPatientAdditionalData,
  validationRules,
} from "~/common";
import { Stack } from "@mui/material";

interface Props {
  onSubmitAdditionalData: IOnSubmitPatientData;
  patientAdditionalData: TPatientAdditionalData | null;
  closeEditFrom: () => void;
}


const TEXT_CHOICES = TEXT_ADDRESSES_EDIT_FORM.workPlace;
const TEXT_BUTTONS = TEXT_ADDRESSES_EDIT_FORM.button;

export const WorkPlaceForm = ({
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
      employmentStatus:
        patientAdditionalData?.employmentStatus || "Основна робота",
      workplace: patientAdditionalData?.workplace || "",
      jobTitle: patientAdditionalData?.jobTitle || "",
    },
    mode: "onChange",
    delayError: 1000,
  });

  const onSubmit = (data: TPatientAdditionalData) => {
    const isNeedCreateData = !patientAdditionalData?.settlementType;

    onSubmitAdditionalData({ ...data, type: "work" }, { isNeedCreateData });

    closeEditFrom();
    reset();
  };

  const onClickCancel = () => {
    closeEditFrom();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={3} m="24px 0">
        <Grid item xs={4}>
          <Controller
            name="employmentStatus"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <SelectWithPlaceholder
                sx={{ width: "100%" }}
                placeholder={TEXT_CHOICES.placeholder.select}
                label={TEXT_CHOICES.title.select}
                {...field}
                error={!!errors.employmentStatus}
                helperText={errors.employmentStatus?.message || " "}
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

        <Grid item xs={4}>
          <Controller
            name="workplace"
            control={control}
            rules={validationRules.workplace}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.addresses}
                placeholder={TEXT_CHOICES.placeholder.addresses}
                {...field}
                error={!!errors.workplace}
                helperText={errors.workplace?.message || " "}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            name="jobTitle"
            control={control}
            rules={validationRules.jobTitle}
            render={({ field }) => (
              <CustomizedInput
                label={TEXT_CHOICES.title.position}
                placeholder={TEXT_CHOICES.placeholder.position}
                {...field}
                error={!!errors.jobTitle}
                helperText={errors.jobTitle?.message || " "}
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
