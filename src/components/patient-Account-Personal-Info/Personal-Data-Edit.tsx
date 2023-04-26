import { Controller } from "react-hook-form";
import { Button, Grid, MenuItem, Stack } from "@mui/material";

import { TPatientPersonalData, useReactHookForm } from "~/common";

import { SelectWithPlaceholder } from "../atomic";
import {
  RHFBirthDate,
  RHFFirstName,
  RHFLastName,
  RHFMiddleName,
  RHFTin,
} from "../React-Hook-Form-Fields";
import { useEffect } from "react";

type PersonalDataEditProps = {
  onSubmitPersonalData: (
    data: TPatientPersonalData,
    type: "patient_info" | "document"
  ) => Promise<void>;
  openCloseEditPersonalData: () => void;
  patientPersonalData: TPatientPersonalData | null;
};

export const PersonalDataEdit = ({
  onSubmitPersonalData,
  openCloseEditPersonalData,
  patientPersonalData,
}: PersonalDataEditProps) => {
  const { control, handleSubmit, isValid, errors, isSubmitSuccessful } =
    useReactHookForm();

  const { lastName, firstName, middleName, birthDate, tin, sex } =
    patientPersonalData || {};

  useEffect(() => {
    isSubmitSuccessful && openCloseEditPersonalData();
  }, [isSubmitSuccessful]);

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) =>
        onSubmitPersonalData(data, "patient_info")
      )}
    >
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={6} laptop={4}>
          <RHFLastName
            control={control}
            errors={errors}
            defaultValue={lastName}
            autoFocus
          />
        </Grid>

        <Grid item xs={12} md={6} laptop={4}>
          <RHFFirstName
            control={control}
            errors={errors}
            defaultValue={firstName}
          />
        </Grid>

        <Grid item xs={12} md={6} laptop={4}>
          <RHFMiddleName
            control={control}
            errors={errors}
            defaultValue={middleName}
          />
        </Grid>

        <Grid item xs={12} md={6} laptop={4}>
          <RHFBirthDate
            control={control}
            errors={errors}
            defaultValue={birthDate}
          />
        </Grid>

        <Grid item xs={12} md={6} laptop={4}>
          <RHFTin control={control} errors={errors} defaultValue={tin} />
        </Grid>

        <Grid item xs={12} md={6} laptop={4}>
          <Controller
            name="sex"
            control={control}
            rules={{ required: true }}
            defaultValue={sex}
            render={({ field }) => (
              <SelectWithPlaceholder
                fullWidth
                label="Стать"
                placeholder="Стать"
                {...field}
                error={!!errors.sex}
                helperText={errors.sex?.message || " "}
              >
                <MenuItem value="male">Чоловік</MenuItem>
                <MenuItem value="female">Жінка</MenuItem>
              </SelectWithPlaceholder>
            )}
          />
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2}>
        <Button variant="text" onClick={openCloseEditPersonalData}>
          Відмінити
        </Button>

        <Button
          disabled={!isValid}
          type="submit"
          variant="contained"
          // sx={{ backgroundColor: primaryColor }}
        >
          Зберегти
        </Button>
      </Stack>
    </form>
  );
};
