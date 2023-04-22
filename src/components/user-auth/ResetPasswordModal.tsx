import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button, Typography, Stack, useTheme, Dialog } from "@mui/material";

import { TAuthFormValues, useDeviceType } from "~/common";
import { RHFPasswordInput, RHFConfirmPassword } from "../ReactHookFormFields";

interface IProps {
  onSubmit: (data: TAuthFormValues) => void;
}

export const ResetPasswordModal = ({ onSubmit }: IProps) => {
  const [openResetPasswordModal, setOpenResetPasswordModal] = useState(true);
  const { palette } = useTheme();
  const isMobile = useDeviceType();

  const { control, handleSubmit, formState, watch } = useForm<TAuthFormValues>({
    mode: "onBlur",
  });

  const { errors } = formState;

  useEffect(
    () => () => setOpenResetPasswordModal(false),
    [formState.isSubmitted]
  );

  return (
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
        onSubmit={handleSubmit(onSubmit)}
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
