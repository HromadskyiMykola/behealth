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
      baseURL: "http://167.99.136.207/api/v1/",
    });
  }

  async signUp(data: TSignUpData) {
    const response = await this.apiClient.post("signup", data);
    return response.data;
  }

  async confirmation(data: string) {
    const response = await this.apiClient.post("confirmation", data);
    return response.data;
  }

  async login({ rememberMe, ...data }: TLoginData): Promise<TLoginResponse> {
    const response = await this.apiClient.post<TLoginResponse>("login", data);

    if (response.data.token) {
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem(
        "user",
        JSON.stringify({ ...response.data, userType: data.user_type })
      );
    }

    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  }

  getCurrentUser() {
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

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
