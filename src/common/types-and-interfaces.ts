import { MouseEventHandler, ReactElement, ReactNode } from "react";
import { RouteObject } from "react-router-dom";

export const enum EUserType {
  PATIENT = "patient",
  DOCTOR = "doctor",
}

export type TAuthFormValues = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  loginPassword: string;
  rememberMe: boolean;
  userType: EUserType;
  birthDate: string;
  tin: string;
  sex: "male" | "female" | "";
  chooseDoctor: string;
  time: string;
  docType: string;
  docSerialNum: string;
};

export interface IAdvantagesBlockProps {
  title: string;
  description: string;
}

export interface MUILinkProps {
  path: string;
  text: string;
}

export interface WhyUsContentArrayItems {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface WhyUsContentItems {
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

export const enum EAuthMode {
  LOGIN = "Вхід",
  REGISTER = "Реєстрація",
  RECOVERY = "Відновлення паролю",
}

export type TRoute = RouteObject & {
  label: string;
  children?: TRoute[];
};

export interface IProfileHelpArrayItems {
  id: number;
  title: string;
  description: string;
}

export interface IProfileHelp {
  headerTitle: string;
  headerSubtitle: string;
  title: string;
  arrayItems: IProfileHelpArrayItems[];
}

export interface AccordionListProps {
  arrayItems: IProfileHelpArrayItems[];
}

export interface AccordionItemProps {
  id?: string;
  title: string;
  description: string;
}

export interface ProfileAppointmentStatusProps {
  status: string;
}

export interface IProfileAppointment {
  title: IIProfileAppointmentTitles;
  cards: IProfileAppointmentCard[];
}

export interface IIProfileAppointmentTitles {
  scheduleTitle: string;
  historyTitle: string;
}

interface IProfileAppointmentCardInfo {
  title: string;
  text: string;
}

export interface IProfileAppointmentCard {
  id: number;
  avatar: string;
  name: string;
  speciality: string;
  typeAppointment: string;
  date: string;
  status: string;
  info: IProfileAppointmentCardInfo[];
}

export interface IProfileAppointmentDetailsInfoTexts {
  title?: string;
  text?: string;
}

export interface IProfileAppointmentDetailsInfo {
  title: string;
  subtitle?: string;
  code?: string;
  details?: IProfileAppointmentDetailsInfoTexts[];
}

export interface IProfileAppointmentDetails {
  visitInfo: IProfileAppointmentDetailsInfo[];
  medicalRecords: IProfileAppointmentDetailsInfo[];
}
export interface IProfileAppointmentDetailsInfoNavigation {
  title: string;
}

export interface ProfileAppointmentListItemProps {
  card: IProfileAppointmentCard;
  bgcolor?: string;
  border?: string;
}

export interface ProfileAppointmentListProps {
  cards: IProfileAppointmentCard[];
}

export interface ProfileAppointmentDetailsNavigationProps {
  navigation: IProfileAppointmentDetailsInfoNavigation[];
  setTargetButton: (s: number) => void;
  targetButton: number;
}

export interface ProfileAppointmentDetailsInfoDefaultCardProps {
  title: string;
  subtitle?: string;
  code?: string;
  details: IProfileAppointmentDetailsInfoTexts[];
}

export interface ProfileAppointmentModalProps {
  targetButtonText: string | undefined;
  isOpen: boolean;
  closeModal: () => void;
}

export interface ButtonsFilteringProps {
  CardsFiltering: (e: React.MouseEvent<HTMLButtonElement>) => void;
  activeButton: string;
}

// apiService types
export type TSignUpData = {
  email: string;
  password: string;
};

export type TLoginData = {
  email: string;
  password: string;
  userType: EUserType;
  rememberMe?: boolean;
};

export type TForgotPassData = {
  email: string;
  userType: EUserType;
};

export type TResetPassData = {
  token: string;
  userType: EUserType;
  password: string;
};

export type TSignInProvider = {
  rememberMe: boolean;
  token: string;
  type: EUserType;
};

export type TPatientAdditionalData = {
  type?: "address" | "work";
  addressType?: string;
  settlement?: string;
  house?: string;
  apartments?: string;
  workType?: string;
  place?: string;
  position?: string;
};
export type TPatientPersonalData = {
  type: "patient_info" | "document";
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  tin: string;
  sex: string;
  series: string;
  docSerialNum: string;
  issuedBy: string;
  date: string;
};

// apiService types

export interface IChips {
  text: string;
}

export interface IContactPhoneWithIcon {
  icon: ReactNode;
  phone: string;
  order?: number;
}
