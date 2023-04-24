import { useEffect, useState } from "react";
import { Button, Typography, Stack, useTheme, Dialog } from "@mui/material";

import { useReactHookForm, useDeviceType } from "~/common";

import { RHFPasswordInput, RHFConfirmPassword } from "../React-Hook-Form-Fields";

export const ResetPassword = () => {
  const [openResetPasswordModal, setOpenResetPasswordModal] = useState(true);
  const { palette } = useTheme();
  const isMobile = useDeviceType();

  const {
    control,
    onSubmitPasswordReset,
    watch,
    isValid,
    errors,
    isSubmitSuccessful,
  } = useReactHookForm();

  useEffect(
    () => () => {
      setOpenResetPasswordModal(false);
    },
    [isSubmitSuccessful]
  );

  return (
    <>
      <Dialog
        open={openResetPasswordModal}
        fullScreen={isMobile}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: isMobile ? 0 : "12px",
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
          onSubmit={onSubmitPasswordReset}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Typography textAlign="center" variant="h5">
            Зміна паролю
          </Typography>

          <RHFPasswordInput control={control} errors={errors} />

          <RHFConfirmPassword control={control} errors={errors} watch={watch} />

          <Stack direction="row" justifyContent="space-between">
            <Button
              variant="outlined"
              sx={{ color: palette.custom.neutral40 }}
              onClick={() => setOpenResetPasswordModal(false)}
            >
              Закрити
            </Button>

            <Button disabled={!isValid} type="submit" variant="contained">
              Зберегти
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};
