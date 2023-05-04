import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { EUserType, TAuthFormValues, useApiService } from "../common";
import { useModalState } from "~/providers";

export const useReactHookForm = () => {
  const { auth, apiError, loading, patient } = useApiService();
  const [searchParams] = useSearchParams();
  const tokenFromParams = searchParams.get("token");
  const userTypeFromParams = searchParams.get("user_type");
  const { setSimpleModalMessage, setSimpleModalLoading } = useModalState();

  const { control, handleSubmit, formState, watch, reset } =
    useForm<TAuthFormValues>({
      mode: "onChange",
      delayError: 1000,
    });

  const { errors, isValid, isSubmitSuccessful } = formState;

  useEffect(() => {
    // since the global context is used, in order to avoid unnecessary re-rendering,
    // perform an additional check
    if (apiError) {
      setSimpleModalLoading(false);
      setSimpleModalMessage(apiError);
    }
    if (loading) setSimpleModalLoading(loading);
  }, [apiError, loading]);

  const onSubmitSingUp = async (data: TAuthFormValues) => {
    const { email, passwordNew } = data;

    await auth.signUp({ email, passwordNew });

    setSimpleModalLoading(false);
    reset();

    return { success: true };
  };

  const onSubmitForgotPassword = (data: TAuthFormValues) => {
    auth.forgotPassword(data).then((res) => {
      setSimpleModalLoading(false);
      setSimpleModalMessage(res);
    });
  };

  const onSubmitPasswordReset = handleSubmit(
    ({ passwordNew }: { passwordNew: string }) => {
      if (tokenFromParams && userTypeFromParams) {
        const userType = userTypeFromParams as EUserType;

        auth
          .resetPassword({ userType, token: tokenFromParams, passwordNew })
          .then((res) => {
            setSimpleModalLoading(false);
            setSimpleModalMessage(res);
          });
      }
    }
  );

  return Object.freeze({
    control,
    handleSubmit,
    onSubmitPasswordReset,
    onSubmitForgotPassword,
    watch,
    reset,
    isValid,
    isSubmitSuccessful,
    errors,
    formState,
    onSubmitSingUp,
  });
};
