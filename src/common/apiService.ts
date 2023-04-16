import { useCallback, useState } from "react";
import axios, { AxiosResponse } from "axios";

import {
  TSignUpData,
  TLoginData,
  TForgotPassData,
  TAuthFormValues,
} from "./types-and-interfaces";

import { ERouteNames } from "~/routes/routeNames";
import { useAuth } from "~/providers";

const errorHandler = (error: any): string => {
  const log = (name: string, data: any) =>
    console.warn(
      `%c${name}`,
      "color: lightgrey; background-color: black; padding: 4px",
      data
    );

  log("Debugging " + error.name + " >>", error.code);
  log("request status >>", error.request?.status);
  log("response status >>", error.response?.status);
  log("err message >>", error.message);
  log("request err data >>", error.request);
  log("response err data >>", error.response?.data);
  log("response err headers >>", error.response?.headers);

  console.log("Full error instance >>", error);

  return (
    error.response?.data?.error ||
    error.response?.statusText + " " + error.message ||
    error.code ||
    error.name ||
    "Unknown error"
  );
};

const useApiService = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const { authenticatedUser } = useAuth();

  const clearApiError = useCallback(() => setApiError(null), []);

  axios.interceptors.request.use((config) => {
    const token = authenticatedUser?.token
      ? `Bearer ${authenticatedUser.token}`
      : "";

    if (token) config.headers.Authorization = token;

    return config;
  });

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

        return Promise.reject("⬆ Details in the console ⬆");
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
      _requestWithErrorHandling(
        _apiClient.post("login", data).then((res) => {
          // if (!res.data?.token) throw new Error("Token not found in response");

          return res;
        })
      ),
    []
  );

  const emailConfirmation = useCallback(
    (data: TAuthFormValues, token: string | undefined) =>
      _requestWithErrorHandling(
        _apiClient.post(ERouteNames.CONFIRMATION + `?token=${token}`, data)
      ),
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
        _apiClient.get("patient-account/appointments", data)
      ),
    []
  );

  const getDoctors = useCallback(
    (data: any) =>
      _requestWithErrorHandling(_apiClient.get(ERouteNames.DOCTORS, data)),
    []
  );

  const getPatientAdditionalInfo = useCallback(
    () =>
      _requestWithErrorHandling(
        _apiClient.get("patient-account/additional-data")
      ),
    []
  );

  const createPatientAdditionalInfo = useCallback(
    (data: any) =>
      _requestWithErrorHandling(
        _apiClient.post("patient-account/additional-data", data)
      ),
    []
  );

  const updatePatientAdditionalInfo = useCallback(
    (data: any) =>
      _requestWithErrorHandling(
        _apiClient.put("patient-account/additional-data", data)
      ),
    []
  );

  const deletePatientAdditionalInfo = useCallback(
    (data: any) =>
      _requestWithErrorHandling(
        _apiClient.delete("patient-account/additional-data", data)
      ),
    []
  );

  const getPatientPersonalInfo = useCallback(
    () =>
      _requestWithErrorHandling(
        _apiClient.get("patient-account/personal-information")
      ),
    []
  );

  const createPatientPersonalInfo = useCallback(
    (data: any) =>
      _requestWithErrorHandling(
        _apiClient.post("patient-account/personal-information", data)
      ),
    []
  );

  const updatePatientPersonalInfo = useCallback(
    (data: any) =>
      _requestWithErrorHandling(
        _apiClient.put("patient-account/personal-information", data)
      ),
    []
  );

  const deletePatientPersonalInfo = useCallback(
    (data: any) =>
      _requestWithErrorHandling(
        _apiClient.delete("patient-account/personal-information", data)
      ),
    []
  );

  return {
    loading,
    apiError,
    clearApiError,
    signUp,
    signIn,
    emailConfirmation,
    forgotPassword,
    getAppointments,
    getDoctors,
    getPatientAdditionalInfo,
    createPatientAdditionalInfo,
    updatePatientAdditionalInfo,
    deletePatientAdditionalInfo,
    getPatientPersonalInfo,
    createPatientPersonalInfo,
    updatePatientPersonalInfo,
    deletePatientPersonalInfo,
  };
};

export { useApiService };
