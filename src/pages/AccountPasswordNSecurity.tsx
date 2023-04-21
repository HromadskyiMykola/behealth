import { useForm, Controller } from "react-hook-form";
import { Button, Stack, Typography } from "@mui/material";

import {
  CustomizedInput,
  CustomizedPaper,
  PasswordInput,
} from "~/components/atomic/index";
import { validationRules, TAuthFormValues } from "~/common";

export const AccountPasswordNSecurity = () => {
  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({ mode: "onChange", delayError: 1000 });

  const { errors } = formState;

  const onSubmit = (data: TAuthFormValues) => {
    console.log(data);
    console.log(formState);
  };

  return (
    <CustomizedPaper>
      <Stack sx={{ gap: "24px" }}>
        <Typography variant="h5">Зміна паролю</Typography>

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
              <PasswordInput
                label="Поточний пароль*"
                placeholder="Введіть пароль"
                {...field}
                error={!!errors.loginPassword}
                helperText={errors.loginPassword?.message || " "}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={validationRules.password}
            render={({ field }) => (
              <PasswordInput
                label="Новий пароль*"
                placeholder="Вигадайте пароль"
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
            rules={validationRules.confirmPassword(watch("loginPassword"))}
            render={({ field }) => (
              <PasswordInput
                label="Повторіть новий пароль*"
                placeholder="Продублюйте пароль"
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
          Забули пароль?
        </Button>

        <Button
          disabled={!formState.isValid}
          type="submit"
          variant="contained"
          // sx={{ backgroundColor: primaryColor }}
        >
          Зберегти
        </Button>
      </Stack>
    </CustomizedPaper>
  );
};
