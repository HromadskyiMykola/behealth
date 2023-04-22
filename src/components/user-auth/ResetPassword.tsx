import { useSearchParams } from "react-router-dom";

import { EUserType, useApiService } from "~/common";
import { useModalState } from "~/providers";

import { SimpleModal } from "../atomic";
import { ResetPasswordModal } from ".";

export const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const userTypeFromParams = searchParams.get("user_type");
  const { auth, apiError, loading } = useApiService();
  const { setSimpleModalMessage } = useModalState();

  const onSubmit = ({ password }: { password: string }) => {
    if (token && userTypeFromParams) {
      const userType = userTypeFromParams as EUserType;

      auth
        .resetPassword({ userType, token, password })
        .then(setSimpleModalMessage);
    }
  };

  return (
    <>
      <ResetPasswordModal onSubmit={onSubmit} />
      <SimpleModal apiError={apiError} loading={loading} />
    </>
  );
};
