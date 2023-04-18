import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button, Dialog, Grid, Typography } from "@mui/material";

import {
  CustomizedInput,
  DatePickerInput,
  InputMobileNumber,
  SimpleModal,
} from "~/components/atomic/index";

import {
  EUserType,
  TAuthFormValues,
  useApiService,
  validationRules,
} from "~/common";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthProvider } from "~/providers";
import { ERouteNames } from "~/routes/routeNames";

export function PatientPersonalIdentification() {
  const [openIdentificationModal, setOpenIdentificationModal] = useState(true);
  const { token } = useParams();
  const { apiError, loading, auth } = useApiService();
  const { singInProvider } = useAuthProvider();
  const navigate = useNavigate();

  const { control, handleSubmit, formState } = useForm<TAuthFormValues>({
    mode: "onChange",
    delayError: 1000,
  });
  const { errors } = formState;

  const onSubmit = (data: TAuthFormValues) => {
    auth.emailConfirmation({ ...data, token }).then((res) => {
      console.log(res); // TODO:

      singInProvider({ ...res, type: EUserType.PATIENT });

      navigate(ERouteNames.PATIENT_ACCOUNT);
    });
    console.log(data);
    console.log(formState);
  };

  return (
    <Dialog
      open={openIdentificationModal}
      maxWidth="md"
      sx={{
        //  maxWidth: "712px",
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
        sx={{ maxWidth: "712px" }}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item textAlign="center">
          <Typography variant="h5">
            Ідентифікація особи та реєстрація
          </Typography>
          <Typography variant="body2" sx={{ mt: "16px", color: "#8E918F" }}>
            Заповніть необхідні поля, аби завершити реєстрацію. Нам потрібна ця
            інформація, аби забезпечити зручність для пацієнтів та медичних
            працівників."
          </Typography>
        </Grid>

        <Grid container columnSpacing="24px">
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={validationRules.lastName}
              render={({ field }) => (
                <CustomizedInput
                  autoFocus
                  label="Прізвище*"
                  {...field}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message || " "}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={validationRules.firstName}
              render={({ field }) => (
                <CustomizedInput
                  label="Ім’я*"
                  placeholder="Олександр"
                  {...field}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message || " "}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="middleName"
              control={control}
              defaultValue=""
              rules={validationRules.middleName}
              render={({ field }) => (
                <CustomizedInput
                  label="По батькові"
                  {...field}
                  error={!!errors.middleName}
                  helperText={errors.middleName?.message || " "}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="birthDate"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <DatePickerInput
                  label="Дата народження*"
                  {...field}
                  onChange={field.onChange}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="mobileNumber"
              control={control}
              defaultValue=""
              rules={validationRules.mobileNumber}
              render={({ field }) => (
                <InputMobileNumber
                  label="Номер телефону*"
                  placeholder="+38 (XXX) XXX XX XX"
                  {...field}
                  error={!!errors.mobileNumber}
                  helperText={errors.mobileNumber?.message || " "}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={validationRules.email}
              render={({ field }) => (
                <CustomizedInput
                  label="Електронна пошта*"
                  placeholder="Введіть e-mail"
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email?.message || " "}
                />
              )}
            />
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

      <SimpleModal apiError={apiError} loading={loading} />
    </Dialog>
  );
}
