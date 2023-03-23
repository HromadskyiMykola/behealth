import { ReactNode } from "react";
import FooterColumNavigateLinks from "../components/FooterColumNavigateLinks/FooterColumNavigateLinks";

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
  fontSize?: "small" | "inherit" | "medium" | "large" | "huge" | undefined;
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

