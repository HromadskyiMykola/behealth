import { useNavigate } from "react-router-dom";
import { UserIcon } from "lucide-react";

import { useAuthProvider, useModalState } from "~/providers";
import { EUserType } from "~/common";
import { ERouteNames } from "~/routes/routeNames";

import { FormModal } from ".";
import { ButtonM } from "../atomic";

const NestedButton = () => {
  const { setOpenMainModal } = useModalState();
  const { authenticatedUser } = useAuthProvider();
  const navigate = useNavigate();

  const handleButton = () => {
    !authenticatedUser
      ? setOpenMainModal(true)
      : navigate(
          authenticatedUser?.type === EUserType.PATIENT
            ? ERouteNames.PATIENT_ACCOUNT
            : ERouteNames.DOCTOR_ACCOUNT
        );
  };

  return (
    <ButtonM
      variant="outlined"
      onClick={handleButton}
      startIcon={<UserIcon style={{ flexShrink: 0 }} size={20} />}
    >
      {!authenticatedUser ? "Увійти" : "Особистий кабінет"}
    </ButtonM>
  );
};

export const AuthorizationButton = () => {
  return (
    <>
      <NestedButton />
      <FormModal />
    </>
  );
};
