import { Controller, Control, FieldErrors, FormState } from "react-hook-form";
import { Button, Grid, MenuItem, Stack, TextField } from "@mui/material";

import { TPatientPersonalData, useReactHookForm } from "~/common";

import {
  CustomizedInput,
  DatePickerInput,
  SelectWithPlaceholder,
} from "../atomic";
import { RHFMiddleName, RHFTin } from "../React-Hook-Form-Fields";
import { useEffect } from "react";

type IdentityDocumentsEditProps = {
  onSubmitPersonalData: (
    data: TPatientPersonalData,
    type: "patient_info" | "document"
  ) => Promise<void>;
  openCloseEditIdentityDocuments: () => void;
  patientPersonalData: TPatientPersonalData | null;
};

export const IdentityDocumentsEdit = ({
  onSubmitPersonalData,
  openCloseEditIdentityDocuments,
  patientPersonalData,
}: IdentityDocumentsEditProps) => {
  const { control, handleSubmit, isValid, errors, isSubmitSuccessful } =
    useReactHookForm();

  const { typeOfDoc, docSeries, issuedBy, dateOfIssue, docNum } =
    patientPersonalData || {};

  useEffect(() => {
    isSubmitSuccessful && openCloseEditIdentityDocuments();
  }, [isSubmitSuccessful]);

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => onSubmitPersonalData(data, "document"))}
    >
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={6} laptop={4}>
          <Controller
            name="typeOfDoc"
            control={control}
            defaultValue={typeOfDoc || ""}
            rules={{ required: true }}
            render={({ field }) => (
              <SelectWithPlaceholder
                fullWidth
                placeholder="Оберіть тип"
                label="Тип документа*"
                {...field}
                error={!!errors.typeOfDoc}
                helperText={errors.typeOfDoc?.message || " "}
              >
                <MenuItem value="IdCard">Картка ID</MenuItem>
                <MenuItem value="Passport">
                  Паспорт громадянина України
                </MenuItem>
              </SelectWithPlaceholder>
            )}
          />
        </Grid>

        <Grid item xs={12} md={12} laptop={8} order={{ md: 1 }}>
          <Controller
            name="issuedBy"
            control={control}
            defaultValue={issuedBy || ""}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomizedInput
                fullWidth
                label="Ким видано*"
                placeholder="Введіть назву установи"
                {...field}
                error={!!errors.issuedBy}
                helperText={errors.issuedBy?.message || " "}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6} laptop={4}>
          <Controller
            name="docSeries"
            control={control}
            defaultValue={docSeries || ""}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomizedInput
                fullWidth
                label="Серія*"
                placeholder="Введіть серію"
                {...field}
                error={!!errors.docSeries}
                helperText={errors.docSeries?.message || " "}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6} laptop={4}>
          <Controller
            name="docNum"
            control={control}
            defaultValue={docNum || ""}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomizedInput
                label="Номер*"
                placeholder="Номер запису документу"
                {...field}
                fullWidth
                error={!!errors.docNum}
                helperText={errors.docNum?.message || " "}
              />
            )}
          />
          {/* <TextField      fullWidth/> */}
        </Grid>

        <Grid item xs={12} md={6} laptop={4}>
          <Controller
            name="dateOfIssue"
            control={control}
            defaultValue={dateOfIssue || ""}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePickerInput
                fullWidth
                label="Дата видачі*"
                {...field}
                onChange={field.onChange}
                error={!!errors.dateOfIssue}
                helperText={errors?.dateOfIssue || " "}
              />
            )}
          />
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => {
            openCloseEditIdentityDocuments();
          }}
        >
          Відмінити
        </Button>

        <Button disabled={!isValid} type="submit" variant="contained">
          Зберегти
        </Button>
      </Stack>
    </form>
  );
};
