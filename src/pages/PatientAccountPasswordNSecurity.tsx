import { useForm, Controller } from "react-hook-form";
import { Button, Stack, Typography } from "@mui/material";

import { SignInSignUpFormValues } from "../common/types_and_interfaces";

import { CustomizedInput, CustomizedPaper } from "../components/Atomic";

import { validationRules } from "../common";

function PatientAccountPasswordNSecurity() {
  const { control, handleSubmit, formState, watch, reset } =
    useForm<SignInSignUpFormValues>({ mode: "onChange", delayError: 1000 });

  const { errors } = formState;

  const onSubmit = (data: SignInSignUpFormValues) => {
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
          spacing={{ md: 0, laptop: 3 }}
          direction={{ md: "column", laptop: "row" }}
        >
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={validationRules.loginPassword}
            render={({ field }) => (
              <CustomizedInput
                label="Поточний пароль*"
                placeholder="Введіть поточний пароль"
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message || " "}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={validationRules.registerPassword}
            render={({ field }) => (
              <CustomizedInput
                label="Новий пароль*"
                placeholder="Вигадайте новий пароль"
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message || " "}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={validationRules.confirmPassword(watch("password"))}
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
