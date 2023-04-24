import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { EUserType, TAuthFormValues, useApiService } from ".";
import { useModalState } from "~/providers";

export const useReactHookForm = () => {
  const { auth, apiError, loading } = useApiService();
  const [searchParams] = useSearchParams();
  const tokenFromParams = searchParams.get("token");
  const userTypeFromParams = searchParams.get("user_type");
  const navigate = useNavigate();
  const { setSimpleModalMessage } = useModalState();

  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({
      mode: "onChange",
      delayError: 1000,
    });

  const { errors, isValid, isSubmitSuccessful } = formState;

  useEffect(() => {
    apiError && setSimpleModalMessage(apiError);
    loading && setSimpleModalMessage({ loading });
    loading && console.log(loading);
  }, [apiError, loading]);

  const onSubmit = (data: TAuthFormValues) => {
    console.log(data);
    console.log(formState);
  };

  const handleSubmitPatientPersonalInfo = handleSubmit(onSubmit);

  // navigate("/patient-account");

  const onSubmitPasswordReset = handleSubmit(
    ({ password }: { password: string }) => {
      if (tokenFromParams && userTypeFromParams) {
        const userType = userTypeFromParams as EUserType;

        auth
          .resetPassword({ userType, token: tokenFromParams, password })
          .then(setSimpleModalMessage);
      }
    }
  );

  return {
    control,
    // handleSubmit,
    handleSubmitPatientPersonalInfo,
    onSubmitPasswordReset,
    watch,
    reset,
    isValid,
    isSubmitSuccessful,
    errors,
    formState,
  };
};
