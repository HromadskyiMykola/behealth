import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import {
  authorizationMode,
  SignInSignUpFormValues,
} from "../../common/types_and_interfaces";

import { ModalContext } from "./ModalContext";

import PasswordInput from "../Atomic/PasswordInput";
import { validationRules } from "../../common/inputValidationRules";
import UserAgreement from "./UserAgreement";
import CustomizedInput from "../Atomic/CustomizedInput";

type Props = {
  mode: authorizationMode;
  setMode: (mode: authorizationMode) => void;
};

const showMode = {
  LOGIN: "Вхід",
  REGISTER: "Реєстрація",
  RECOVERY: "Відновлення паролю",
};

export default function SignInSignUpForm({ mode, setMode }: Props) {
  const { handleThanksModalOpen } = useContext(ModalContext);

  const isLoginMode: boolean = mode === "LOGIN";
  const isRegisterMode: boolean = mode === "REGISTER";
  const isRecoveryMode: boolean = mode === "RECOVERY";

  const { control, handleSubmit, formState, watch, reset } =
    useForm<SignInSignUpFormValues>({ mode: "onChange", delayError: 1000 });

  const { errors } = formState;

  const onSubmit = (data: SignInSignUpFormValues) => {
    handleThanksModalOpen();
    console.log(data);
    console.log(formState);
  };

  return (
    <Stack
      direction="column"
      // alignItems="center"
      // spacing={1}
      sx={{
        // width: '100%',
        // minWidth: "448px",
        p: "32px",
        // gap: "24px",
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

      <Box
        component="form"
        noValidate
        sx={{
          mb: "24px",
          display: "flex",
          flexDirection: "column",
          // gap: 16,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* {isRegisterMode && ( // NAME
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={validationRules.firstName}
            render={({ field }) => (
              <CustomizedInput
                autoFocus={isRegisterMode}
                label="Ім’я"
                placeholder="Олександр"
                {...field}
                error={!!errors.firstName}
                helperText={errors.firstName?.message || " "}
              />
            )}
          />
        )} */}

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
                ? validationRules.registerPassword
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
              name="checkbox"
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
              name="checkbox"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={({ field }) => (
                // <FormControlLabel control={<Checkbox {...field} />} label="" />
                <Checkbox {...field} />
              )}
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

// /////////////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!