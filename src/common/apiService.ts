import { useCallback, useState } from "react";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import {
  TSignUpData,
  TLoginData,
  TForgotPassData,
} from "./types-and-interfaces";

import { ERouteNames } from "~/routes/routeNames";

// class ApiService {
//   #apiClient: AxiosInstance;

//   #errorHandler(data: any) {
//     if (!axios.isAxiosError(data)) return data;

//     const error: AxiosError = data;

//     const label = (name: string) => [
//       `%c${name}`,
//       "color: lightgreen; background-color: black; padding: 4px",
//     ];

//     const log = (name: string, data: any) => console.warn(...label(name), data);

//     log("Debugging " + error.name + " >>", error.code);
//     log("request status >>", error.request.status);
//     log("response status >>", error.response?.status);
//     log("err message >>", error.message);
//     log("request err data >>", error.request);
//     log("response err data >>", error.response?.data);
//     log("response err headers >>", error.response?.headers);

//     console.log(...label("Full error instance >>"), error);

//     throw error.response?.statusText || error.message || error.code;
//   }

//   async #requestWithErrorHandling<T>(
//     request: Promise<AxiosResponse<T>>
//   ): Promise<any> {
//     try {
//       const response = await request;
//       console.log("OK >>", response.data);

//       return response.data;
//     } catch (error) {
//       this.#errorHandler(error);
//     }
//   }

//   constructor() {
//     this.#apiClient = axios.create({
//       baseURL: "https://www.behealth.pp.ua/api/v1/",
//     });
//   }

//   signUp(data: TSignUpData) {
//     return this.#requestWithErrorHandling(this.#apiClient.post("signup", data));
//   }

//   login(data: TLoginData) {
//     return this.#requestWithErrorHandling(this.#apiClient.post("login", data));
//   }

//   confirmation(data: string | undefined) {
//     return this.#requestWithErrorHandling(
//       this.#apiClient.post("confirmation", data)
//     );
//   }

//   forgotPassword(data: TForgotPassData) {
//     return this.#requestWithErrorHandling(this.#apiClient.post("forgot", data));
//   }

//   getAppointments(data: any) {
//     return this.#requestWithErrorHandling(
//       this.#apiClient.get(ERouteNames.PATIENT_ACCOUNT_APPOINTMENT, data)
//     );
//   }

//   getDoctors(data: any) {
//     return this.#requestWithErrorHandling(
//       this.#apiClient.get(ERouteNames.DOCTORS, data)
//     );
//   }

//   logout() {}
// }

// export const apiService = new ApiService();

// hook instance

const errorHandler = (error: any): string => {
  const log = (name: string, data: any) =>
    console.warn(
      `%c${name}`,
      "color: lightgrey; background-color: black; padding: 4px",
      data
    );

  log("Debugging " + error.name + " >>", error.code);
  log("request status >>", error.request.status);
  log("response status >>", error.response?.status);
  log("err message >>", error.message);
  log("request err data >>", error.request);
  log("response err data >>", error.response?.data);
  log("response err headers >>", error.response?.headers);

  console.log("Full error instance >>", error);

  return (
    error.response?.statusText ||
    error.message ||
    error.code ||
    error.name ||
    "unknown error"
  );
};

const useApiService = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const clearApiError = useCallback(() => setApiError(null), []);

  const _apiClient = axios.create({
    baseURL: "https://www.behealth.pp.ua/api/v1/",
  });

  const _requestWithErrorHandling = useCallback(
    async <T>(request: Promise<AxiosResponse<T>>) => {
      setLoading(true);
      setApiError(null);
      try {
        const response = await request;
        console.log("OK >>", response.data);
        return response.data;
      } catch (error) {
        setApiError(errorHandler(error));
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const signUp = useCallback(
    (data: TSignUpData) =>
      _requestWithErrorHandling(_apiClient.post("signup", data)),
    []
  );

  const signIn = useCallback(
    (data: TLoginData) =>
      _requestWithErrorHandling(_apiClient.post("login", data)),
    []
  );

  const emailConfirmation = useCallback(
    (data: string | undefined) =>
      _requestWithErrorHandling(_apiClient.post("confirmation", data)),
    []
  );

  const forgotPassword = useCallback(
    (data: TForgotPassData) =>
      _requestWithErrorHandling(_apiClient.post("forgot", data)),
    []
  );

  const getAppointments = useCallback(
    (data: any) =>
      _requestWithErrorHandling(
        _apiClient.get(ERouteNames.PATIENT_ACCOUNT_APPOINTMENT, data)
      ),
    []
  );

  const getDoctors = useCallback(
    (data: any) =>
      _requestWithErrorHandling(_apiClient.get(ERouteNames.DOCTORS, data)),
    []
  );

  // const logout = useCallback(() => {}, []);

  return {
    signUp,
    signIn,
    emailConfirmation,
    forgotPassword,
    getAppointments,
    getDoctors,
    // logout,
    loading,
    apiError,
    clearApiError,
  };
};

export { useApiService };
