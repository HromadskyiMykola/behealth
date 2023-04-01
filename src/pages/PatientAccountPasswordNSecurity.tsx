import { useForm, Controller } from "react-hook-form";
import { Button, Stack, Typography } from "@mui/material";

import { AuthFormValues } from "../common/types_and_interfaces";

import { CustomizedInput, CustomizedPaper } from "../components/Atomic";

import { validationRules } from "../common";

function PatientAccountPasswordNSecurity() {
  const { control, handleSubmit, formState, watch, reset } =
    useForm<AuthFormValues>({ mode: "onChange", delayError: 1000 });

  const { errors } = formState;

  const onSubmit = (data: AuthFormValues) => {
    console.log(data);
    console.log(formState);
  };

  return (
    <CustomizedPaper>
      <Stack sx={{ gap: "24px" }}>
        <Typography variant="h5">{"Зміна паролю"}</Typography>

        <Stack
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          spacing={{ md: 0, laptop: 1 }}
          direction={{ md: "column", laptop: "row" }}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Controller
            name="loginPassword"
            control={control}
            defaultValue=""
            rules={validationRules.loginPassword}
            render={({ field }) => (
              <CustomizedInput
                label="Поточний пароль*"
                placeholder="Введіть поточний пароль"
                {...field}
                error={!!errors.loginPassword}
                helperText={errors.loginPassword?.message || " "}
              />
            )}
          />

          <Controller
            name="newPassword"
            control={control}
            defaultValue=""
            rules={validationRules.newPassword}
            render={({ field }) => (
              <CustomizedInput
                label="Новий пароль*"
                placeholder="Вигадайте новий пароль"
                {...field}
                error={!!errors.newPassword}
                helperText={errors.newPassword?.message || " "}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={validationRules.confirmPassword(watch("newPassword"))}
            render={({ field }) => (
              <CustomizedInput
                label="Повторіть новий пароль*"
                placeholder="Продублюйте новий пароль"
                {...field}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message || " "}
              />
            )}
          />
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          variant="text"
          onClick={() => {
            reset();
            // setMode("RECOVERY");
          }}
        >
          {"Забули пароль?"}
        </Button>

        <Button
          disabled={!formState.isValid}
          type="submit"
          variant="contained"
          // sx={{ backgroundColor: primaryColor }}
        >
          {"Зберегти"}
        </Button>
      </Stack>
    </CustomizedPaper>
  );
}

export default PatientAccountPasswordNSecurity;
