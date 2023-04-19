import { useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import {
  TSignUpData,
  TLoginData,
  TForgotPassData,
  TAuthFormValues,
  TPatientAdditionalData,
  TResetPassData,
  TPatientPersonalData,
} from "./types-and-interfaces";

import { useAuthProvider } from "~/providers";

// TODO: import { mockApi } from "./mockApi";

// TODO: const USE_MOCK_API = false;

const apiClient = axios.create({
  baseURL: "https://www.behealth.pp.ua/api/v1/",
});

const errorHandler = (error: any): any => {
  const { name, response, request, message, code } = error;

  if (typeof response?.data === "string" && response.data.includes("DOCTYPE")) {
    response.data = "there was useless information here...";
  }

  const log = (name: string, data: any) =>
    console.warn(
      `%c${name}`,
      "color: lightgrey; background-color: black; padding: 4px",
      data
    );

  log("Debugging " + name + " >>", code);
  log("request status >>", request?.status);
  log("response status >>", response?.status);
  log("err message >>", message);
  log("request err data >>", request);
  log("response err data >>", response?.data);
  log("response err headers >>", response?.headers);

  console.log("Full error instance >>", error);

  return (
    response?.data?.error ||
    response?.statusText + " " + message ||
    code ||
    name ||
    "Unknown error"
  );
};

// Unfortunately, back-end developers don't understand that the names of the parameters should be correct,
// so i had to make the function to transform the output data.
const buildRequestData = (data: any) => {
  const {
    userType,
    firstName,
    middleName,
    lastName,
    mobileNumber,
    docSerialNum,
    issuedBy,
    addressType,
    birthDate,
    workType,
    tin,
    ...rest
  } = data;

  return {
    ...(userType ? { user_type: userType } : {}),
    ...(firstName ? { name: firstName } : {}),
    ...(middleName ? { fathername: middleName } : {}),
    ...(lastName ? { surname: lastName } : {}),
    ...(birthDate ? { birthday: birthDate } : {}),
    ...(mobileNumber ? { phone: mobileNumber } : {}),
    ...(addressType ? { address_type: addressType } : {}),
    ...(workType ? { work_type: workType } : {}),
    ...(docSerialNum ? { series: docSerialNum } : {}),
    ...(issuedBy ? { issued_by: issuedBy } : {}),
    ...(tin ? { itn: tin } : {}),
    ...rest,
  };
};

const useApiService = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<any>(null);
  const { authenticatedUser } = useAuthProvider();

  const clearApiError = useCallback(() => setApiError(null), []);

  useEffect(() => {
    const interceptorId = apiClient.interceptors.request.use((config) => {
      const token = authenticatedUser?.token
        ? `Bearer ${authenticatedUser.token}`
        : "";

      // add a token to all requests
      if (config.headers && token) config.headers.Authorization = token;

      // transform data in all requests
      if (config.method === "post" || config.method === "put") {
        config.data = buildRequestData(config.data);
      } else if (config.method === "delete") {
        config.params = buildRequestData(config.params);
      }

      return config;
    });

    return () => {
      apiClient.interceptors.request.eject(interceptorId);
    };
  }, [authenticatedUser]);

  // TODO: на випадок подальших тупняків від беків, реалізувати фіктивній АРІ

  // if (USE_MOCK_API) {
  //   apiClient.interceptors.request.use((config) => {
  //     config.adapter = async () => {
  //       switch (config.url) {
  //         case "/doctors":
  //           return {
  //             data: mockApi.getDoctorsData(),
  //             status: 200,
  //             statusText: "OK",
  //             config,
  //             headers: {},
  //           };
  //         // TODO: додати ендпоінти
  //         default:
  //           throw new Error(`No mock data for ${config.url}`);
  //       }
  //     };

  //     return config;
  //   });
  // }

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
      _requestWithErrorHandling(apiClient.post("signup", data)),
    []
  );

  const signIn = useCallback(
    (data: TLoginData) =>
      _requestWithErrorHandling(
        apiClient.post("login", data).then((res) => {
          // if (!res.data?.token)
          //   throw new Error(`// ${res.data} // Token not found in response`);

          return res;
        })
      ),
    []
  );

  const emailConfirmation = useCallback(
    (
      { firstName, lastName, birthDate, mobileNumber }: TAuthFormValues,
      token: string | undefined
    ) =>
      _requestWithErrorHandling(
        apiClient.post(`confirmation?token=${token}`, {
          firstName,
          lastName,
          birthDate,
          mobileNumber,
        })
      ),
    []
  );

  const resetPassword = useCallback(
    ({ userType, token, password }: TResetPassData) =>
      _requestWithErrorHandling(
        apiClient.post(`reset?token=${token}&user_type=${userType}`, {
          password,
        })
      ),
    []
  );

  const forgotPassword = useCallback(
    ({ email, userType }: TForgotPassData) =>
      _requestWithErrorHandling(apiClient.post("forgot", { email, userType })),
    []
  );

  const getDoctors = useCallback(
    () => _requestWithErrorHandling(apiClient.get("doctors")),
    []
  );

  const getAppointments = useCallback(
    () =>
      _requestWithErrorHandling(apiClient.get("patient-account/appointments")),
    []
  );

  const getPatientAdditionalInfo = useCallback(
    () =>
      _requestWithErrorHandling(
        apiClient.get("patient-account/additional-data")
      ),
    []
  );

  const createPatientAdditionalInfo = useCallback(
    (data: TPatientAdditionalData) =>
      _requestWithErrorHandling(
        apiClient.post("patient-account/additional-data/create", data)
      ),
    []
  );

  const updatePatientAdditionalInfo = useCallback(
    (data: TPatientAdditionalData) =>
      _requestWithErrorHandling(
        apiClient.put("patient-account/additional-data/update", data)
      ),
    []
  );

  const deletePatientAdditionalInfo = useCallback(
    (data: TPatientAdditionalData) =>
      _requestWithErrorHandling(
        apiClient.delete("patient-account/additional-data/destroy", {
          params: data,
        })
      ),
    []
  );

  const getPatientPersonalInfo = useCallback(
    () =>
      _requestWithErrorHandling(
        apiClient.get("patient-account/personal-information")
      ),
    []
  );

  const createPatientPersonalInfo = useCallback(
    (data: TPatientPersonalData) =>
      _requestWithErrorHandling(
        apiClient.post("patient-account/personal-information/create", data)
      ),
    []
  );

  const updatePatientPersonalInfo = useCallback(
    (data: TPatientPersonalData) =>
      _requestWithErrorHandling(
        apiClient.put("patient-account/personal-information/update", data)
      ),
    []
  );

  const deletePatientPersonalInfo = useCallback(
    (data: TPatientPersonalData) =>
      _requestWithErrorHandling(
        apiClient.delete("patient-account/personal-information/destroy", {
          params: data,
        })
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
