import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import {
  Box,
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
  useApiService,
  useDeviceType,
  TAuthMode,
} from "~/common";

import { ERouteNames } from "~/routes/routeNames";
import {
  RHFPasswordConfirm,
  RHFEmail,
  RHFPasswordNew,
  RHFPasswordCurrent,
} from "../React-Hook-Form-Fields";
import { SimpleModal } from "../atomic";

type TAuthFormProps = {
  mode: TAuthMode;
  setMode: (mode: TAuthMode) => void;
};
export function AuthForm({ mode, setMode }: TAuthFormProps) {
  const [userType, setUserType] = useState<EUserType>(EUserType.PATIENT);
  const { setOpenMainModal, setSimpleModalMessage } = useModalState();
  const { singInProvider } = useAuthProvider();
  const navigate = useNavigate();
  const { apiError, loading, auth } = useApiService();
  const { palette, breakpoints } = useTheme();
  const isMobile = useDeviceType();
  const isSmDown = useMediaQuery(breakpoints.down("sm"));

  const { isLoginMode, isRegisterMode, isRecoveryMode } = mode;

  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({
      mode: "onChange",
      delayError: 1000,
    });

  const { errors } = formState;

  const onSubmit = (data: TAuthFormValues) => {
    if (isRegisterMode) {
      const { email, passwordNew } = data;

      auth.signUp({ email, passwordNew }).then(() => {
        reset();
        setOpenMainModal(false);
        setSimpleModalMessage(<ThanksSingUpMessage email={email} />);
      });
    }

    if (isLoginMode) {
      const { rememberMe, email, passwordCurrent } = data;

      auth.signIn({ email, passwordCurrent, userType }).then((token) => {
        singInProvider({ token, type: userType, rememberMe });
        setOpenMainModal(false);
        setSimpleModalMessage(false);

        navigate(
          userType === EUserType.PATIENT
            ? ERouteNames.PATIENT_ACCOUNT
            : ERouteNames.DOCTOR_ACCOUNT
        );
      });
    }

    if (isRecoveryMode) {
      const { email } = data;

      auth.forgotPassword({ email, userType }).then(setSimpleModalMessage);
    }
  };

  return (
    <>
      <SimpleModal apiError={apiError} loading={loading} />

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
            <Typography
              variant="body2"
              sx={{ color: palette.custom.neutral60 }}
            >
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

            {/* {(isLoginMode || isRegisterMode) && ( // PASSWORD
            )} */}
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
              sx={{ mt: "24px" }}
              disabled={!formState.isValid || loading}
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
    </>
  );
}
