import { useCallback, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

import {
  TSignUpData,
  TLoginData,
  TForgotPassData,
  TAuthFormValues,
  TPatientAdditionalData,
  TResetPassData,
} from "./types-and-interfaces";

import { ERouteNames } from "~/routes/routeNames";
import { useAuthProvider } from "~/providers";

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

const buildRequestData = (data: any) => {
  const {
    firstName,
    middleName,
    lastName,
    mobileNumber,
    docSerialNum,
    issuedBy,
    addressType,
    birthDate,
    workType,
    ...rest
  } = data;

  return {
    ...(addressType ? { address_type: addressType } : {}),
    ...(firstName ? { name: firstName } : {}),
    ...(middleName ? { fathername: middleName } : {}),
    ...(lastName ? { surname: lastName } : {}),
    ...(workType ? { work_type: workType } : {}),
    ...(mobileNumber ? { phone: mobileNumber } : {}),
    ...(birthDate ? { birthday: birthDate } : {}),
    ...(docSerialNum ? { series: docSerialNum } : {}),
    ...(issuedBy ? { issued_by: issuedBy } : {}),
    ...(workType ? { work_type: workType } : {}),
    ...(workType ? { work_type: workType } : {}),
    ...(workType ? { work_type: workType } : {}),
    ...(workType ? { work_type: workType } : {}),
    ...rest,
  };
};

const useApiService = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const { authenticatedUser } = useAuthProvider();

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
          // if (!res.data?.token)
          //   throw new Error(`// ${res.data} // Token not found in response`);

          return res;
        })
      ),
    []
  );

  const emailConfirmation = useCallback(
    ({
      birthDate,
      firstName,
      lastName,
      mobileNumber,
      token,
    }: TAuthFormValues & { token: string | undefined }) => {
      const data = {
        birthday: birthDate,
        name: firstName,
        surname: lastName,
        phone: mobileNumber,
        token,
      };

      return _requestWithErrorHandling(
        _apiClient.post(`confirmation?token=${token}`, data)
      );
    },
    []
  );

  const resetPassword = useCallback(
    ({ userType, token, password }: TResetPassData) =>
      _requestWithErrorHandling(
        _apiClient.post(`reset?token=${token}&user_type=${userType}`, {
          password,
        })
      ),
    []
  );

  const forgotPassword = useCallback(
    ({ email, userType }: TForgotPassData) =>
      _requestWithErrorHandling(
        _apiClient.post("forgot", { email, user_type: userType })
      ),
    []
  );

  const getDoctors = useCallback(
    () => _requestWithErrorHandling(_apiClient.get("doctors")),
    []
  );

  const getAppointments = useCallback(
    () =>
      _requestWithErrorHandling(_apiClient.get("patient-account/appointments")),
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
    (data: TPatientAdditionalData) => {
      const { addressType, workType, ...rest } = data;

      return _requestWithErrorHandling(
        _apiClient.post("patient-account/additional-data", {
          address_type: addressType,
          work_type: workType,
          ...rest,
        })
      );
    },
    []
  );

  const updatePatientAdditionalInfo = useCallback(
    (data: TPatientAdditionalData) =>
      _requestWithErrorHandling(
        _apiClient.put(
          "patient-account/additional-data",
          buildRequestData(data)
        )
      ),
    []
  );

  const deletePatientAdditionalInfo = useCallback(
    (data: TPatientAdditionalData) =>
      _requestWithErrorHandling(
        _apiClient.delete("patient-account/additional-data", {
          params: buildRequestData(data),
        })
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

  const auth = Object.freeze({
    signUp,
    signIn,
    emailConfirmation,
    forgotPassword,
    resetPassword,
  });

  const patient = Object.freeze({
    getAppointments,
    additionalInfo: Object.freeze({
      get: getPatientAdditionalInfo,
      create: createPatientAdditionalInfo,
      update: updatePatientAdditionalInfo,
      delete: deletePatientAdditionalInfo,
    }),
    personalInfo: Object.freeze({
      get: getPatientPersonalInfo,
      create: createPatientPersonalInfo,
      update: updatePatientPersonalInfo,
      delete: deletePatientPersonalInfo,
    }),
  });

  return Object.freeze({
    loading,
    apiError,
    clearApiError,
    getDoctors,
    auth,
    patient,
  });
};

export { useApiService };
