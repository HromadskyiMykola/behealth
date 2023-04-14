import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { EUserType, useApiService } from "~/common";
import { NotFound } from "~/pages";
import { useAuth } from "../components/providers/AuthProvider";
import { ERouteNames } from "~/routes/routeNames";

const EmailConfirmation = () => {
  const { token } = useParams<{ token: string }>();
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const { authenticatedUser } = useAuth();
  const { emailConfirmation } = useApiService();
  console.log("confirmation page >>>", token);

  useEffect(() => {
    emailConfirmation(token)
      .then((data) => {
        setIsConfirmed(true);
        authenticatedUser?.type === EUserType.PATIENT
          ? redirect(ERouteNames.PATIENT_ACCOUNT)
          : redirect(ERouteNames.DOCTOR_ACCOUNT);
        console.log("data >>>", data);
      })
      .catch((error) => {
        console.warn("Debugging >>>>", error);
      });
  }, []);

  return isConfirmed ? (
    <div>
      <p>Оце БІМБА! :Д</p>
    </div>
  ) : (
    <NotFound />
  );
};

export { EmailConfirmation };
