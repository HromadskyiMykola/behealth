import { useNavigate, useSearchParams } from "react-router-dom";

import { EUserType, TAuthFormValues, useApiService } from "~/common";
import { useAuthProvider } from "~/providers";
import { ERouteNames } from "~/routes/routeNames";

import { PatientPersonalIdentification } from ".";
import { SimpleModal } from "../atomic";

export const EmailConfirmation = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const { auth, apiError, loading } = useApiService();
  const { singInProvider } = useAuthProvider();
  const navigate = useNavigate();

  const onSubmit = (data: TAuthFormValues) => {
    auth.emailConfirmation(data, token).then((token) => {
      singInProvider({ token, type: EUserType.PATIENT });
      navigate("/" + ERouteNames.PATIENT_ACCOUNT);
    });
  };

  return (
    <>
      <PatientPersonalIdentification email={email} onSubmit={onSubmit} />
      <SimpleModal apiError={apiError} loading={loading} />
    </>
  );
};
