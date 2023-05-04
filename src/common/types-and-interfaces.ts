import {
  MouseEventHandler,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { RouteObject } from "react-router-dom";
import { optionsTemplate } from "~/helper-function";
import { filterOptions } from "~/hooks";

export const enum EUserType {
  PATIENT = "patient",
  DOCTOR = "doctor",
}

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
  links: { name: string; path?: string | undefined }[];
  itIsLink?: boolean;
}

export type TAuthMode = {
  isLoginMode?: boolean;
  isRegisterMode?: boolean;
  isRecoveryMode?: boolean;
};

export type TRoute = RouteObject & {
  label: string;
  children?: TRoute[];
};

export interface IProfileHelpArrayItems {
  id: number;
  title: string;
  description: string[];
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
  description: string[];
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
  passwordNew: string;
};

export type TLoginData = {
  email: string;
  passwordCurrent: string;
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
  passwordNew: string;
};

export type TPatientAdditionalData = {
  type: "address" | "work";
  //
  settlementType?: string;
  settlementAndStr?: string;
  houseNum?: string;
  apartmentNum?: string;
  //
  employmentStatus?: string;
  workplace?: string;
  jobTitle?: string;
  //
  eligibleCat?: string;
};

export type TPatientPersonalData = {
  type?: "patient_info" | "document";
  mobileNum?: string;
  email?: string;
  //
  firstName?: string;
  middleName?: string;
  lastName?: string;
  birthDate?: string;
  tin?: string;
  sex?: "male" | "female" | "";
  //
  typeOfDoc?: "Passport" | "IdCard" | "";
  docSeries?: string;
  issuedBy?: string;
  dateOfIssue?: string;
  docNum?: string;
};

export type TAuthFormValues = TPatientPersonalData & {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNum: string;
  passwordNew: string;
  passwordConfirm: string;
  passwordCurrent: string;
  rememberMe: boolean;
  userAgreement: boolean;
  userType: EUserType;
  birthDate: string;
  tin: string;
  sex: "male" | "female" | "";
  chooseDoctor: string;
  time: string;
  // typeOfDoc: "Passport" | "IdCard";
  docNum: string;
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

export interface ISelectItemHeaderValue {
  value: string;
  text: string;
}

export interface IPatientAdditionDataOld {
  address: null | any;
  preferenceCategories: null | any;
  workPlace: null | any;
}

export interface IPatientAdditionDataProps {
  apartmentNum?: string;
  houseNum?: string;
  id?: number;
  preferenceCategories?: undefined;
  settlementAndStr?: string;
  settlementType?: string;
  workPlace: undefined | string;
  jobTitle?: string;
  employmentStatus?: string;
  address?: undefined;
}

export interface IOnSubmitPatientData {
  (
    data: TPatientAdditionalData | TPatientPersonalData,
    action?: {
      isNeedCreateData?: boolean;
      isNeedDeleteData?: boolean;
    }
  ): Promise<void>;
}

export type TDoctor = {
  doctorAcceptsDeclarations: boolean;
  doctorWorksWithEHR: boolean;
  onlineConsultation: boolean;
  admissionOfChildren: boolean;
  admissionByReferral: boolean;
  admissionByNHSU: boolean;
  id: number;
  dataType: "doctor" | "clinic";
  speciality: string;
  name: string;
  city: string;
  experience: number;
  availableHours: {
    available: boolean;
    workHours: string[];
    availableTime: string[];
  };
  sex: "male" | "female";
  avatar: string;
  clinicType: string;
  district: string;
  address: string;
  tags: string[];
  grade: string;
  qualification: string;
  paidAppointment: false | number;
  reviewsCount: number;
  rating: number;
  socials: {
    title: string;
    link: string;
  }[];
  email: string;
  contacts: {
    type: string;
    phone: string;
  }[];
};

export type TClinic = {
  id: number;
  dataType: "doctor" | "clinic";
  clinicType: "state" | "private";
  city: string;
  district: string;
  name: string;
  address: string;
  phoneNumberRegistry: string;
  phoneNumberAdministration: string;
  tags?: {
    title: string;
  }[];
  workingHours: {
    day: string;
    hours: string | null;
  }[];
  doctorsIds: number[];
};

export type TOptionsData = typeof optionsTemplate;

export type TFilterOptions = typeof filterOptions;



export type THandleFilterChange = (
  key: keyof TFilterOptions | "resetFilter",
  value: string | boolean | number | number[],
) => void;

// export type TAsideFilterComps = {
//   optionsData: TOptionsData;
//   handleFilterChange: THandleFilterChange;
// };
