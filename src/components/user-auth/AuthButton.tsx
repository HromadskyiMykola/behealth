import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { FormModal, ThanksModal, PersonalIdentification } from ".";
import { ModalStateProvider, useAuth, useModalState } from "../providers";
import { useNavigate } from "react-router-dom";
import { ERouteNames } from "~/routes/routeNames";

const NestedButton = () => {
  const { handleMainModalOpen } = useModalState();
  const { authenticatedUser } = useAuth();
  const navigate = useNavigate();

  const handleButton = () => {
    !authenticatedUser
      ? handleMainModalOpen()
      : navigate(
          authenticatedUser?.type === "patient"
            ? ERouteNames.PATIENT_ACCOUNT
            : ERouteNames.DOCTOR_ACCOUNT
        );
  };

  return (
    <Button
      variant="outlined"
      onClick={handleButton}
      startIcon={<PersonIcon fontSize="small" />}
    >
      {!authenticatedUser ? "Увійти" : "Особистий кабінет"}
    </Button>
  );
};

export const AuthorizationButton = () => {
  return (
    <ModalStateProvider>
      <NestedButton />

      <FormModal />

      <ThanksModal />

      <PersonalIdentification />
    </ModalStateProvider>
  );
};
