export type SignInSignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
};

export type authorizationMode = "LOGIN" | "REGISTER" | "RECOVERY";