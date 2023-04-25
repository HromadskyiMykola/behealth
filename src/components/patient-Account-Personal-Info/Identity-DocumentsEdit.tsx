import { Controller, Control, FieldErrors, FormState } from "react-hook-form";
import { Button, Grid, MenuItem, Stack } from "@mui/material";

import { TAuthFormValues } from "~/common";

import {
  CustomizedInput,
  DatePickerInput,
  SelectWithPlaceholder,
} from "../atomic";
import { RHFMiddleName, RHFTin } from "../React-Hook-Form-Fields";

type IdentityDocumentsEditProps = {
  handleEditIdentityDocuments: () => void;
  identityDocuments: any;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
  isValid: boolean;
};

export const IdentityDocumentsEdit = ({
  handleEditIdentityDocuments,
  identityDocuments,
  control,
  errors,
  isValid,
}: IdentityDocumentsEditProps) => {
  return (
    <>
      <Grid
        container
        spacing={{ md: 0, laptop: 1 }}
        // direction={{ md: "column", laptop: "row" }}
        // justifyContent="space-between"
        // alignItems="stretch"
      >
        <Grid item laptop={4}>
          <Controller
            name="typeOfDoc"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <SelectWithPlaceholder
                fullWidth
                placeholder="Оберіть тип"
                label="Тип документа*"
                {...field}
                error={!!errors.lastName}
                helperText={errors.lastName?.message || " "}
              >
                <MenuItem value="var 1">Картка ID</MenuItem>
                <MenuItem value="var 2">Паспорт громадянина України</MenuItem>
                <MenuItem value="var 3">Водійське посвідчення</MenuItem>
              </SelectWithPlaceholder>
            )}
          />
        </Grid>

        <Grid item laptop={8}>
          <Controller
            name="docNum"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <CustomizedInput
                autoFocus
                label="Серія*"
                placeholder="Введіть серійний номер документу"
                {...field}
                error={!!errors.firstName}
                helperText={errors.firstName?.message || " "}
              />
            )}
          />
        </Grid>

        <Grid item laptop={4}>
          <RHFMiddleName control={control} errors={errors} />
        </Grid>

        <Grid item laptop={4}>
          <Controller
            name="dateOfIssue"
            control={control}
            // defaultValue={defaultValue}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePickerInput
                label="Дата видачі*"
                {...field}
                onChange={field.onChange}
              />
            )}
          />
        </Grid>

        <Grid item laptop={4}>
          <RHFTin control={control} errors={errors} />
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => {
            handleEditIdentityDocuments();
          }}
        >
          Відмінити
        </Button>

        <Button disabled={!isValid} type="submit" variant="contained">
          Зберегти
        </Button>
      </Stack>
    </>
  );
};
