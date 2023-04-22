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
  RHFConfirmPassword,
  RHFEmail,
  RHFPasswordInput,
} from "../ReactHookFormFields";
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
  const { palette } = useTheme();
  const isMobile = useDeviceType();

  const { isLoginMode, isRegisterMode, isRecoveryMode } = mode;

  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({
      mode: "onChange",
      delayError: 1000,
    });

  const { errors } = formState;

  const onSubmit = (data: TAuthFormValues) => {
    if (isRegisterMode) {
      const { email, password } = data;

      auth.signUp({ email, password }).then(() => {
        reset();
        setSimpleModalMessage(<ThanksSingUpMessage email={email} />);
      });
    }

    if (isLoginMode) {
      const { rememberMe, email, password } = data;

      auth.signIn({ email, password, userType }).then((res) => {
        singInProvider({ ...res, type: userType, rememberMe });
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

      <Box>
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
          >
            <Typography
              variant="body2"
              sx={{ color: palette.custom.neutral60 }}
            >
              {isLoginMode ? "Ще не зареєстровані?" : "Вже зареєстровані?"}
            </Typography>

            <Typography
              sx={{ ml: "4px", cursor: "pointer" }}
              variant="body2"
              color={palette.primary.main}
              onClick={() => {
                reset();
                setMode(
                  isLoginMode ? { isLoginMode: true } : { isRegisterMode: true }
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

            {(isLoginMode || isRegisterMode) && ( // PASSWORD
              <RHFPasswordInput control={control} errors={errors} />
            )}

            {isRegisterMode && ( // CONFIRM PASS
              <RHFConfirmPassword
                control={control}
                errors={errors}
                watch={watch}
              />
            )}

            {isLoginMode && (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                justifyContent="space-between"
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
      </Box>
    </>
  );
}
