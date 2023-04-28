import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller } from "react-hook-form";

import {
  Button,
  Typography,
  Stack,
  FormControlLabel,
  Checkbox,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useModalState, useAuthProvider } from "~/providers";

import { UserTypeSelector, UserAgreement, ThanksSingUpMessage } from ".";

import {
  TAuthFormValues,
  EUserType,
  useDeviceType,
  TAuthMode,
  useReactHookForm,
} from "~/common";

import { ERouteNames } from "~/routes/routeNames";

import {
  RHFPasswordConfirm,
  RHFEmail,
  RHFPasswordNew,
  RHFPasswordCurrent,
} from "../React-Hook-Form-Fields";

type TAuthFormProps = {
  mode: TAuthMode;
  setMode: (mode: TAuthMode) => void;
};

export function AuthForm({ mode, setMode }: TAuthFormProps) {
  const [userType, setUserType] = useState<EUserType>(EUserType.PATIENT);
  const { setOpenMainModal, setSimpleModalMessage } = useModalState();
  const { onSubmitSignIn } = useAuthProvider();
  const navigate = useNavigate();
  const { palette, breakpoints } = useTheme();
  const isMobile = useDeviceType();
  const isSmDown = useMediaQuery(breakpoints.down("sm"));

  const { isLoginMode, isRegisterMode, isRecoveryMode } = mode;

  const {
    control,
    handleSubmit,
    onSubmitForgotPassword,
    onSubmitSingUp,
    watch,
    reset,
    errors,
    isValid,
  } = useReactHookForm();

  const onSubmit = (data: TAuthFormValues) => {
    if (isRegisterMode) {
      onSubmitSingUp(data).then((res) => {
        if (!res.success) return;

        setOpenMainModal(false);
        setSimpleModalMessage(<ThanksSingUpMessage email={data.email} />);
      });
    }

    if (isLoginMode) {
      onSubmitSignIn({ ...data, userType }).then((res) => {
        if (!res.success) return;

        setOpenMainModal(false);
        navigate(
          userType === EUserType.PATIENT
            ? ERouteNames.PATIENT_ACCOUNT
            : ERouteNames.DOCTOR_ACCOUNT
        );
      });
    }

    if (isRecoveryMode) {
      onSubmitForgotPassword({ ...data, userType });
    }
  };

  return (
    <Stack maxWidth="442px" mt={isRecoveryMode && isMobile ? "60px" : 0}>
      {!isRegisterMode && (
        <UserTypeSelector userType={userType} onChange={setUserType} />
      )}

      <Stack
        sx={{
          p: "32px",
          backgroundColor: palette.custom.primary100,
          borderRadius: "12px",
        }}
      >
        <Typography sx={{ alignSelf: "center", mb: "16px" }} variant="h5">
          {(isLoginMode && "Вхід") ||
            (isRegisterMode && "Реєстрація") ||
            (isRecoveryMode && "Відновлення паролю")}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="center"
          mb="24px"
          gap={1}
          flexWrap="wrap"
        >
          <Typography variant="body2" sx={{ color: palette.custom.neutral60 }}>
            {isLoginMode ? "Ще не зареєстровані?" : "Вже зареєстровані?"}
          </Typography>

          <Typography
            sx={{ cursor: "pointer" }}
            variant="body2"
            color={palette.primary.main}
            onClick={() => {
              reset();
              setMode(
                isLoginMode ? { isRegisterMode: true } : { isLoginMode: true }
              );
            }}
          >
            {isLoginMode ? "Зареєструватися" : "Увійти"}
          </Typography>
        </Stack>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <RHFEmail
            control={control}
            errors={errors}
            autoFocus={!!isLoginMode || !!isRecoveryMode}
          />

          {isLoginMode && ( // PASSWORD
            <RHFPasswordCurrent control={control} errors={errors} />
          )}

          {isRegisterMode && ( // CONFIRM PASS
            <>
              <RHFPasswordNew control={control} errors={errors} />

              <RHFPasswordConfirm
                control={control}
                errors={errors}
                watch={watch}
              />
            </>
          )}

          {isLoginMode && (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="space-between"
              flexWrap={isSmDown ? "wrap-reverse" : "nowrap"}
            >
              <Controller
                name="rememberMe"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    componentsProps={{ typography: { variant: "body2" } }}
                    control={<Checkbox {...field} checked={field.value} />}
                    label="Запамʼятати мене"
                  />
                )}
              />

              <Typography
                sx={{ ml: "4px", cursor: "pointer" }}
                variant="body2"
                color={palette.primary.main}
                onClick={() => {
                  reset();
                  setMode({ isRecoveryMode: true });
                }}
              >
                Забули пароль?
              </Typography>
            </Stack>
          )}

          {isRegisterMode && (
            <Stack direction="row" alignItems="flex-start">
              <Controller
                name="userAgreement"
                control={control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value} />
                )}
              />
              <UserAgreement />
            </Stack>
          )}

          <Button
            fullWidth
            sx={{ mt: "24px" }}
            disabled={!isValid}
            type="submit"
            variant="contained"
          >
            {isLoginMode && "Увійти"}
            {isRegisterMode && "Зареєструватися"}
            {isRecoveryMode && "Відправити інструкцію"}
          </Button>
        </form>
      </Stack>
    </Stack>
  );
}
