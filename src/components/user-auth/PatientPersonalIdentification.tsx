import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, Dialog, Grid, Typography, useTheme } from "@mui/material";

import { CustomizedInput } from "../atomic";

import { TAuthFormValues } from "~/common";
import {
  RHFBirthDate,
  RHFFirstName,
  RHFLastName,
  RHFMiddleName,
  RHFmobileNum,
} from "../React-Hook-Form-Fields";

interface IProps {
  onSubmit: (data: TAuthFormValues) => void;
  email: string | null;
}

export function PatientPersonalIdentification({ onSubmit, email }: IProps) {
  const [openIdentificationModal, setOpenIdentificationModal] = useState(true);
  const { custom } = useTheme().palette;

  const { control, handleSubmit, formState } = useForm<TAuthFormValues>({
    mode: "onChange",
    delayError: 1000,
  });

  const { errors } = formState;

  return (
    <Dialog
      open={openIdentificationModal}
      maxWidth="md"
      sx={{
        "& .MuiPaper-root": {
          borderRadius:
            // mobileDevice ? 0 :
            "12px",
        },
      }}
      onClose={() => setOpenIdentificationModal(false)}
    >
      <Grid
        component="form"
        container
        p="32px"
        gap="24px"
        direction="column"
        width="712px"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item textAlign="center">
          <Typography variant="h5">
            Ідентифікація особи та реєстрація
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: "16px", color: custom.neutral60 }}
          >
            Заповніть необхідні поля, аби завершити реєстрацію. Нам потрібна ця
            інформація, аби забезпечити зручність для пацієнтів та медичних
            працівників."
          </Typography>
        </Grid>

        <Grid container columnSpacing="24px">
          <Grid item xs={12} sm={6}>
            <RHFLastName control={control} errors={errors} autoFocus />
          </Grid>

          <Grid item xs={12} sm={6}>
            <RHFFirstName control={control} errors={errors} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <RHFMiddleName control={control} errors={errors} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <RHFBirthDate control={control} errors={errors} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <RHFmobileNum control={control} errors={errors} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CustomizedInput label="Електронна пошта*" disabled value={email} />
          </Grid>
        </Grid>

        <Button
          variant="text"
          sx={{ pl: "16px", alignSelf: "flex-start" }}
          onClick={() => {}}
        >
          Чому це важливо?
        </Button>

        <Button
          disabled={!formState.isValid}
          type="submit"
          variant="contained"
          // sx={{ backgroundColor: primaryColor }}
        >
          Завершити реєстрацію
        </Button>
      </Grid>
    </Dialog>
  );
}
