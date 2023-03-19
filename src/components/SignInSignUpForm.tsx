import { useState } from "react";
import { useForm, Controller, Control, FieldValues } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { SignInSignUpFormValues } from "../common/types_and_interfaces";
import PasswordInput from "./PassawordField";
import { validationRules } from "./validationRules";

type Mode = "LOGIN" | "REGISTER" | "RECOVERY";

const primaryColor = "#3ABD98";
const secondaryColor = "#FFFFFF";
const textColor = "#212121";

const showMode: Record<Mode, string> = {
  LOGIN: "Вхід",
  REGISTER: "Реєстрація",
  RECOVERY: "Відновлення паролю",
};

export default function SignInSignUpForm() {
  const [mode, setMode] = useState<Mode>("LOGIN");
  const isLoginMode: boolean = mode === "LOGIN";
  const isRegisterMode: boolean = mode === "REGISTER";
  const isRecoveryMode: boolean = mode === "RECOVERY";

  const { control, handleSubmit, formState, watch, reset } =
    useForm<SignInSignUpFormValues>({ mode: "onChange", delayError: 1000 });

  const { errors } = formState;

  const onSubmit = (data: SignInSignUpFormValues) => console.log(data);

  console.log(formState);
  // console.log(errors);

  return (
    <Stack
      direction="column"
      // alignItems="center"
      spacing={1}
      sx={{ p: 2, backgroundColor: secondaryColor, borderRadius: "12px" }}
    >
      <Typography
        sx={{ alignSelf: "center", m: "4px", color: textColor }}
        variant="h5"
      >
        {showMode[mode]}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography sx={{ m: "4px", color: textColor }}>
          {isLoginMode ? "Ще не зареєстровані?" : "Вже зареєстровані?"}.
        </Typography>
        <Button
          variant="text"
          sx={{ color: primaryColor }}
          onClick={() => {
            reset();
            setMode(isLoginMode ? "REGISTER" : "LOGIN");
          }}
        >
          {isLoginMode ? "Зареєструватися" : "Увійти"}
        </Button>
      </Stack>

      <Box
        component="form"
        noValidate
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {isRegisterMode && ( // NAME
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={validationRules.firstName}
            render={({ field }) => (
              <TextField
                autoFocus={isRegisterMode}
                label="Ім’я"
                {...field}
                error={!!errors.firstName}
                helperText={errors.firstName?.message || " "}
              />
            )}
          />
        )}

        <Controller // EMAIL
          name="email"
          control={control}
          defaultValue=""
          rules={validationRules.email}
          render={({ field }) => (
            <TextField
              autoFocus={isLoginMode || isRecoveryMode}
              label="E-mail"
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
              isRegisterMode ? validationRules.registerPassword : validationRules.loginPassword
            }
            render={({ field }) => (
              <PasswordInput
                label="Пароль"
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
              name="checkbox"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox sx={{ color: primaryColor }} {...field} />}
                  label="Запамʼятати мене"
                />
              )}
            />

            <Button
              variant="text"
              sx={{ color: primaryColor }}
              onClick={() => {
                reset();
                setMode("RECOVERY");
              }}
            >
              {"Забули пароль?"}
            </Button>
          </Stack>
        )}

        <Button
          disabled={!formState.isValid}
          type="submit"
          variant="contained"
          sx={{ backgroundColor: primaryColor }}
        >
          {isLoginMode && "Увійти"}
          {isRegisterMode && "Зареєструватися"}
          {isRecoveryMode && "Відправити інструкцію"}
        </Button>
      </Box>
    </Stack>
  );
}

//       <Controller
// name="lastName"
// control={control}
// defaultValue=""
// rules={{ required: true, maxLength: 100 }}
// render={({ field }) => (
//   <TextField
//   label="Last name"
//   {...field}
//   error={!!errors.lastName}
//   helperText={errors.lastName ? "This field is required" : ""}
//   />
//   )}
// />

//       <Controller
// name="mobileNumber"
// control={control}
// defaultValue=""
// rules={{ required: true, minLength: 6, maxLength: 12 }}
// render={({ field }) => (
//   <TextField
//   label="Mobile number"
//   {...field}
//   error={!!errors.mobileNumber}
//   helperText={
//     errors.mobileNumber ? "Please enter a valid mobile number" : ""
//   }
//   />
//   )}
// />

// Общие требования к полям на сайте
// Поле не заполнено - граница серая, и в поле нет текста.
// Заполненное поле - активное или пассивное, когда валидация полностью завершена -> зеленая рамка. Текст в поле черный.
// Заполненное поле - активное или пассивное, когда условия валидации не завершены -> красная граница, подсказка под красным полем, изменяется в зависимости от списка условий валидации. Текст в поле черный.
// При вводе символов в поля, подсказки появляются по мере прохождения условий валидации.
// Во всех полях есть заполнитель.
// Поля пароля и повторного пароля в форме регистрации являются глазком.
// Каждое поле имеет счетчик символов, состоящий из двух цифр через "/", первая - сколько символов введено, печатная - сколько символов максимально.

// Условия проверки поля "e-mail" в регистрационной форме
// Прописные и строчные буквы (A-Z и a-z)
// Цифровые символы (0-9)
// Специальные символы точка (.), знак подчеркивания (_) и дефис (-)
// Точка, точка или точка (.) с условием, что она не может быть первой или последней буквой электронного письма и не может повторяться друг за другом.
// Не может содержать пробел

// Условия проверки поля "Пароль" в регистрационной форме
// Может содержать любую букву, кроме пробела
// Не менее 8 символов, но не более 15 символов
// Не менее одной заглавной и одной строчной буквы
// Не менее одной цифровой и одного специального символа - ! # $ % & ' * + - / = ? ^ _ ` { | } ~
