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
  LinearProgress,
  useTheme,
} from "@mui/material";

import { useModalState, useAuthProvider } from "~/providers";
import { CustomizedInput, PasswordInput } from "../atomic";

import { UserTypeSelector, UserAgreement, ThanksSingUpMessage } from ".";


import {
  TAuthFormValues,
  validationRules,
  EUserType,
  EAuthMode,
  useApiService,
} from "~/common";

import { ERouteNames } from "~/routes/routeNames";

type TAuthFormProps = {
  mode: EAuthMode;
  setMode: (mode: EAuthMode) => void;
};

export function AuthForm({ mode, setMode }: TAuthFormProps) {
  const [userType, setUserType] = useState<EUserType>(EUserType.PATIENT);
  const { setOpenMainModal, setSimpleModalMessage } = useModalState();
  const { singInProvider } = useAuthProvider();
  const navigate = useNavigate();
  const { apiError, loading, auth } = useApiService();
  const { palette } = useTheme();

  const isLoginMode = mode === EAuthMode.LOGIN;
  const isRegisterMode = mode === EAuthMode.REGISTER;
  const isRecoveryMode = mode === EAuthMode.RECOVERY;

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

    // console.log(formState);
  };

  useEffect(() => {
    apiError && setSimpleModalMessage(apiError);

    loading &&
      setSimpleModalMessage(
        <LinearProgress color="success" sx={{ width: "100%" }} />
      );
  }, [apiError, loading]);

  return (
    <>
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
            {mode}
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
                setMode(isLoginMode ? EAuthMode.REGISTER : EAuthMode.LOGIN);
              }}
            >
              {isLoginMode ? "Зареєструватися" : "Увійти"}
            </Typography>
          </Stack>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Controller // EMAIL
              name="email"
              control={control}
              defaultValue=""
              rules={validationRules.email}
              render={({ field }) => (
                <CustomizedInput
                  label="Електронна пошта"
                  placeholder="mail@example.com"
                  autoFocus={isLoginMode || isRecoveryMode}
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email?.message || " "}
                />
              )}
            />

            {(isLoginMode || isRegisterMode) && ( // PASSWORD
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={
                  isRegisterMode
                    ? validationRules.password
                    : validationRules.loginPassword
                }
                render={({ field }) => (
                  <PasswordInput
                    label="Пароль"
                    placeholder="123qwe!@#QWE"
                    {...field}
                    error={!!errors.password}
                    helperText={errors.password?.message || " "}
                  />
                )}
              />
            )}

            {isRegisterMode && ( // CONFIRM PASS
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={validationRules.confirmPassword(watch("password"))}
                render={({ field }) => (
                  <PasswordInput
                    label="Підтвердження паролю"
                    placeholder="123qwe!@#QWE"
                    {...field}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message || " "}
                  />
                )}
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
                    setMode(EAuthMode.RECOVERY);
                  }}
                >
                  Забули пароль?
                </Typography>
              </Stack>
            )}

            {isRegisterMode && (
              <Stack direction="row" alignItems="flex-start">
                <Controller
                  name="rememberMe"
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
