import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Button, Typography, Stack, useTheme, Dialog } from "@mui/material";

import { PasswordInput } from "../atomic";

import { TAuthFormValues, validationRules } from "~/common";

interface IProps {
  onSubmit: (data: TAuthFormValues) => void;
}

export const ResetPasswordModal = ({ onSubmit }: IProps) => {
  const [openResetPasswordModal, setOpenResetPasswordModal] = useState(true);
  const { palette } = useTheme();

  const { control, handleSubmit, formState, watch } = useForm<TAuthFormValues>({
    mode: "onChange",
    delayError: 1000,
  });

  const { errors } = formState;

  return (
    <Dialog
      open={openResetPasswordModal}
      // fullScreen
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "12px",
        },
      }}
      onClose={() => setOpenResetPasswordModal(false)}
    >
      <Stack
        m="auto"
        component="form"
        width="448px"
        p="32px"
        gap="24px"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Typography textAlign="center" variant="h5">
          Зміна паролю
        </Typography>

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
          rules={validationRules.confirmPassword(watch("password"))}
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

        <Stack direction="row" justifyContent="space-between">
          <Button
            variant="outlined"
            sx={{ color: palette.custom.neutral40 }}
            onClick={() => {
              setOpenResetPasswordModal(false);
            }}
          >
            Закрити
          </Button>

          <Button
            disabled={!formState.isValid}
            type="submit"
            variant="contained"
          >
            Зберегти
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};
