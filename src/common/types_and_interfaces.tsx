import { ReactElement, ReactNode } from "react";

export type SignInSignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
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

export type authorizationMode = "LOGIN" | "REGISTER" | "RECOVERY";


