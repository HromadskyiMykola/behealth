import axios, { AxiosInstance } from "axios";

import {
  TSignUpData,
  TLoginData,
  TLoginResponse,
  TForgotPassData,
} from "./types-and-interfaces";

import { ERouteNames } from "~/routes/routeNames";

class ApiService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://www.behealth.pp.ua/api/v1/",
    });
  }

  async signUp(data: TSignUpData) {
    const response = await this.apiClient.post("signup", data);
    return response.data;
  }

  async confirmation(data: string | undefined) {
    const response = await this.apiClient.post("confirmation", data);
    console.log("confirmation func >>>", response);
    
    return response.data;
  }

  async login(data: TLoginData) {
    const response = await this.apiClient.post("login", data);
    return response.data;
  }

  logout() {}

  async forgotPassword(data: TForgotPassData) {
    const response = await axios.post("forgot", data);
    return response.data;
  }

  async getAppointments() {
    const response = await this.apiClient.get(
      ERouteNames.PATIENT_ACCOUNT_APPOINTMENT
    );
    return response.data;
  }

  async getDoctors() {
    const response = await axios.get(ERouteNames.DOCTORS);
    return response.data;
  }
}

export const apiService = new ApiService();
