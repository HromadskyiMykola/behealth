import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import {
  TSignUpData,
  TLoginData,
  TLoginResponse,
  TForgotPassData,
} from "./types-and-interfaces";

import { ERouteNames } from "~/routes/routeNames";

class ApiService {
  private apiClient: AxiosInstance;

  private errorHandler(data: any) {
    if (!axios.isAxiosError(data)) return data;

    const error: AxiosError = data;

    const label = (name: string) => [
      `%c${name}`,
      "color: lightgreen; background-color: black; padding: 4px",
    ];

    const log = (name: string, data: any) => console.warn(...label(name), data);

    log("Debugging " + error.name + " >>", error.code);
    log("response status >>", error?.response?.status);
    log("request status >>", error?.request.status);
    log("err message >>", error?.message);
    log("request err data >>", error?.request);
    log("response err data >>", error?.response?.data);
    log("response err headers >>", error?.response?.headers);

    console.log(...label("Full error instance >>"), error);

    throw error?.response?.statusText || error?.message || error.code;
  }

  private async requestWithErrorHandling<T>(
    request: Promise<AxiosResponse<T>>
  ): Promise<any> {
    try {
      const response = await request;
      console.log("OK >>", response.data);

      return response.data;
    } catch (error) {
      this.errorHandler(error);
    }
  }

  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://www.behealth.pp.ua/api/v1/",
    });
  }

  signUp(data: TSignUpData) {
    return this.requestWithErrorHandling(this.apiClient.post("signup", data));
  }

  login(data: TLoginData) {
    return this.requestWithErrorHandling(this.apiClient.post("login", data));
  }

  confirmation(data: string | undefined) {
    return this.requestWithErrorHandling(
      this.apiClient.post("confirmation", data)
    );
  }

  forgotPassword(data: TForgotPassData) {
    return this.requestWithErrorHandling(this.apiClient.post("forgot", data));
  }

  getAppointments(data: any) {
    return this.requestWithErrorHandling(
      this.apiClient.get(ERouteNames.PATIENT_ACCOUNT_APPOINTMENT, data)
    );
  }

  getDoctors(data: any) {
    return this.requestWithErrorHandling(
      this.apiClient.get(ERouteNames.DOCTORS, data)
    );
  }

  logout() {}
}

export const apiService = new ApiService();
