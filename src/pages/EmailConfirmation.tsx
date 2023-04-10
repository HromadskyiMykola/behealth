import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { apiService } from "~/common";
import { NotFound } from "~/pages";
import { useAuth } from "../components/providers/AuthProvider";
import { ERouteNames } from "~/routes/routeNames";

const EmailConfirmation = () => {
  const { token } = useParams<{ token: string }>();
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const { authenticatedUser } = useAuth();
  console.log("confirmation page >>>", token);

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        await apiService.confirmation(token);
        setIsConfirmed(true);
        authenticatedUser?.type === "patient"
          ? redirect(ERouteNames.PATIENT_ACCOUNT)
          : redirect(ERouteNames.DOCTOR_ACCOUNT);
      } catch (error) {
        setIsConfirmed(false);
      }
    };

    confirmEmail();
  }, [token]);

  return isConfirmed ? (
    <div>
      <p>Оце БІМБА! :Д</p>
    </div>
  ) : (
    <NotFound />
  );
};

export { EmailConfirmation };
