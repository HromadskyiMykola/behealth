import { Controller, Control, FieldErrors, FormState } from "react-hook-form";
import { Button, Grid, MenuItem, Stack } from "@mui/material";

import { TAuthFormValues } from "~/common";

import { SelectWithPlaceholder } from "../atomic";
import {
  RHFBirthDate,
  RHFFirstName,
  RHFLastName,
  RHFMiddleName,
  RHFTin,
} from "../React-Hook-Form-Fields";

type PersonalDataEditProps = {
  handleEditPersonalData: () => void;
  personalData: any;
  control: Control<TAuthFormValues>;
  errors: FieldErrors<TAuthFormValues>;
  isValid: boolean;
};

export const PersonalDataEdit = ({
  handleEditPersonalData,
  control,
  errors,
  isValid,
  personalData,
}: PersonalDataEditProps) => {
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
          <RHFLastName
            control={control}
            errors={errors}
            defaultValue={personalData?.lastName}
            autoFocus
          />
        </Grid>

        <Grid item laptop={4}>
          <RHFFirstName
            control={control}
            errors={errors}
            defaultValue={personalData?.firsName}
          />
        </Grid>

        <Grid item laptop={4}>
          <RHFMiddleName
            control={control}
            errors={errors}
            defaultValue={personalData?.middleName}
          />
        </Grid>

        <Grid item laptop={4}>
          <RHFBirthDate
            control={control}
            errors={errors}
            defaultValue={personalData?.birthDate}
          />
        </Grid>

        <Grid item laptop={4}>
          <RHFTin
            control={control}
            errors={errors}
            defaultValue={personalData?.tin}
          />
        </Grid>

        <Grid item laptop={4}>
          <Controller
            name="sex"
            control={control}
            rules={{ required: true }}
            defaultValue={
              // personalData?.sex ||
              "male"}
            render={({ field }) => (
              <SelectWithPlaceholder
                fullWidth
                label="Стать"
                placeholder="Стать"
                {...field}
                // TODO       error={!!errors.middleName}
                // helperText={errors.middleName?.message || " "}
              >
                <MenuItem value="male">Чоловік</MenuItem>
                <MenuItem value="female">Жінка</MenuItem>
              </SelectWithPlaceholder>
            )}
          />
        </Grid>
      </Grid>

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => {
            handleEditPersonalData();
            // setMode("RECOVERY");
          }}
        >
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
    </>
  );
};
