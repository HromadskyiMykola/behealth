import { ReactNode } from "react";

export type SignInSignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
};

export type SvgIconsProps = {
  width: string;
  height: string;
  viewBox: string;
  fill: string;
  xmlns: string;
  fontSize?: "small" | "inherit" | "medium" | "large" | undefined;
};

export interface FooterInfoBlogProps {
  title: string;
  text: string[];
}
export interface FooterContactPhoneProps {
  icon: ReactNode;
  phone: string;
}
export interface FooterColumNavigateLinksProps {
  title: string;
  links: { name: string; path?: string }[];
  itIsLink?: boolean;
}

export type authorizationMode = "LOGIN" | "REGISTER" | "RECOVERY";

