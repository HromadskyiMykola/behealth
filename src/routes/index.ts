import { ComponentType } from "react";
import {
  AboutPage,
  ClinicsPage,
  DoctorsPage,
  HomePage,
  ProfilePage,
} from "../pages";

export interface IRoutes {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  HOME = "/",
  ABOUT = "/about",
  DOCTORS = "/doctors",
  CLINICS = "/clinics",
  PROFILE = "/profile",
}

const commonRoutes: IRoutes[] = [
  { path: RouteNames.HOME, component: HomePage },
  { path: RouteNames.ABOUT, component: AboutPage },
  { path: RouteNames.DOCTORS, component: DoctorsPage },
  { path: RouteNames.CLINICS, component: ClinicsPage },
];

export const publicRoutes: IRoutes[] = [...commonRoutes];

export const privateRoutes: IRoutes[] = [
  ...commonRoutes,
  { path: RouteNames.PROFILE, component: ProfilePage },
];
