import { ReactElement, ReactNode } from "react";
import { RouteObject } from "react-router-dom";

export type TAuthFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  newPassword: string;
  confirmPassword: string;
  loginPassword: string;
  checkbox: boolean;
  userType: string;
};

export interface IAdvantagesBlockProps {
  title: string;
  description: string;
}

export interface MUILinkProps {
  path: string;
  text: string;
}

interface WhyUsContentArrayItems {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface WhyUsContentItems {
  title: string;
  description: string;
  link: JSX.Element;
  arrayItems: WhyUsContentArrayItems[];
}

export interface WhyUsContentProps {
  items: WhyUsContentItems;
}

export interface IChooseDoctor {
  id: number;
  icon: ReactElement;
  name: string;
  count: number;
}

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

export type TAuthMode = "LOGIN" | "REGISTER" | "RECOVERY";

export type TRoute = RouteObject & {
  label: string;
  children?: TRoute[];
};


// apiService types

export type TRegisterData = {
  email: string;
  password: string;
};

export type TLoginData = {
  email: string;
  password: string;
  userType: "doctor" | "patient";
};

export type TLoginResponse = {
  message: string;
  token: string;
  userType: string;
};

// apiService types
