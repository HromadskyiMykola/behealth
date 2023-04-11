import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { CustomizedInput, PasswordInput } from "../atomic";
import { UserTypeSelector, UserAgreement } from ".";

import { useModalState } from "../providers";
import { TAuthMode, TAuthFormValues, validationRules } from "~/common";
import { apiService } from "~/common/apiService";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ERouteNames } from "~/routes/routeNames";

type TAuthFormProps = {
  mode: TAuthMode;
  setMode: (mode: TAuthMode) => void;
};

const showMode = {
  LOGIN: "Вхід",
  REGISTER: "Реєстрація",
  RECOVERY: "Відновлення паролю",
};

export function AuthForm({ mode, setMode }: TAuthFormProps) {
  const auth = useAuth();
  const { handleThanksModalOpen, handleMainModalClose } = useModalState();
  const [userType, setUserType] = useState<"patient" | "doctor">("patient");
  const navigate = useNavigate();

  const isLoginMode: boolean = mode === "LOGIN";
  const isRegisterMode: boolean = mode === "REGISTER";
  const isRecoveryMode: boolean = mode === "RECOVERY";

  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({
      mode: "onChange",
      delayError: 1000,
    });

  const { errors } = formState;

  const onSubmit = (data: TAuthFormValues) => {
    if (isRegisterMode) {
      const { email, newPassword: password } = data;
      apiService.signUp({ email, password }).then(handleThanksModalOpen);
    }

    if (isLoginMode) {
      const { rememberMe, email, newPassword: password } = data;
      auth
        .login({ email, password, user_type: userType, rememberMe })
        .then((user) => {
          handleMainModalClose();
          navigate(
            user.type === "patient"
              ? ERouteNames.PATIENT_ACCOUNT
              : ERouteNames.DOCTOR_ACCOUNT
          );
        });
    }

    // console.log(formState);
  };

  return (
    <Box>
      <UserTypeSelector value={userType} onChange={setUserType} />

      <Stack
        sx={{
          p: "32px",
          backgroundColor: "#FFF",
          borderRadius: "12px",
        }}
      >
        <Typography sx={{ alignSelf: "center", mb: "16px" }} variant="h5">
          {showMode[mode]}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="center"
          mb="24px"
        >
          <Typography variant="body2" sx={{ color: "#8E918F" }}>
            {isLoginMode ? "Ще не зареєстровані?" : "Вже зареєстровані?"}
          </Typography>

          <Button
            sx={{ ml: "4px", p: 0 }}
            variant="text"
            onClick={() => {
              reset();
              setMode(isLoginMode ? "REGISTER" : "LOGIN");
            }}
          >
            {isLoginMode ? "Зареєструватися" : "Увійти"}
          </Button>
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
              name="newPassword"
              control={control}
              defaultValue=""
              rules={
                isRegisterMode
                  ? validationRules.newPassword
                  : validationRules.loginPassword
              }
              render={({ field }) => (
                <PasswordInput
                  label="Пароль"
                  placeholder="123qwe!@#QWE"
                  {...field}
                  error={!!errors.newPassword}
                  helperText={errors.newPassword?.message || " "}
                />
              )}
            />
          )}

          {isRegisterMode && ( // CONFIRM PASS
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={validationRules.confirmPassword(watch("newPassword"))}
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
                    control={<Checkbox {...field} />}
                    label="Запамʼятати мене"
                  />
                )}
              />

              <Button
                variant="text"
                onClick={() => {
                  reset();
                  setMode("RECOVERY");
                }}
              >
                {"Забули пароль?"}
              </Button>
            </Stack>
          )}

          {isRegisterMode && (
            <Stack direction="row" alignItems="flex-start">
              <Controller
                name="rememberMe"
                control={control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field }) => <Checkbox {...field} />}
              />
              <UserAgreement />
            </Stack>
          )}

          <Button
            sx={{ mt: "24px" }}
            disabled={!formState.isValid}
            type="submit"
            variant="contained"
            // sx={{ backgroundColor: primaryColor }}
          >
            {isLoginMode && "Увійти"}
            {isRegisterMode && "Зареєструватися"}
            {isRecoveryMode && "Відправити інструкцію"}
          </Button>
        </form>
      </Stack>
    </Box>
  );
}
