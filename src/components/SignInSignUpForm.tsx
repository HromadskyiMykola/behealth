import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Typography } from "@mui/material";

import { SignInSignUpFormValues } from "../common/types_and_interfaces";

export default function SignInSignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignInSignUpFormValues>({ mode: "onChange", delayError: 1000 });

  const password = watch("password");

  const onSubmit = (data: SignInSignUpFormValues) => console.log(data);

  return (
    <fieldset style={{ borderRadius: "10px" }}>
      <legend>
        <Typography
          sx={{ m: "4px", color: "#777", letterSpacing: 4 }}
          variant="h5"
        >
          Форма реєстрації користувача
        </Typography>
      </legend>
      <form
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{ required: true, maxLength: 80 }}
        render={({ field }) => (
          <TextField
            label="First name"
            {...field}
            error={!!errors.firstName}
            helperText={errors.firstName ? "This field is required" : ""}
          />
        )}
      /> */}

        {/* <Controller
        name="lastName"
        control={control}
        defaultValue=""
        rules={{ required: true, maxLength: 100 }}
        render={({ field }) => (
          <TextField
            label="Last name"
            {...field}
            error={!!errors.lastName}
            helperText={errors.lastName ? "This field is required" : ""}
          />
        )}
      /> */}

        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern:
              /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*)@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/i,
          }}
          render={({ field }) => (
            <TextField
              label={
                errors.email
                  ? "Будь ласка, введіть коректну e-mail адресу"
                  : "E-mail"
              }
              {...field}
              error={!!errors.email}
              // helperText={
              //   errors.email ? "Please enter a valid email address" : " "
              // }
            />
          )}
        />

        {/* <Controller
        name="mobileNumber"
        control={control}
        defaultValue=""
        rules={{ required: true, minLength: 6, maxLength: 12 }}
        render={({ field }) => (
          <TextField
            label="Mobile number"
            {...field}
            error={!!errors.mobileNumber}
            helperText={
              errors.mobileNumber ? "Please enter a valid mobile number" : ""
            }
          />
        )}
      /> */}

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            max: 128,
            min: 8,
            pattern:
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()\-_=+[\]{}\\|;:'",./<>?]).+$/i,
          }}
          render={({ field }) => (
            <TextField
              label={
                errors.password
                  ? "Будь ласка, введіть коректний пароль"
                  : "Пароль"
              }
              type="password"
              {...field}
              error={!!errors.password}
              // helperText={
              //   errors.password ? "Please enter a valid password" : ""
              // }
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            validate: (value) => value === password || "Passwords do not match",
          }}
          render={({ field }) => (
            <TextField
              label={
                errors.confirmPassword
                  ? "Паролі не співпадають"
                  : "Підтвердження паролю"
              }
              type="password"
              {...field}
              error={!!errors.confirmPassword}
              // helperText={
              //   errors.confirmPassword ? "Passwords do not match" : ""
              // }
            />
          )}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </fieldset>
  );
}


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