import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { ModalContext, useModalState } from "~/context";
import { FormModal, ThanksModal, PersonalIdentification } from ".";
import { useAuth } from "../providers";
import { useNavigate } from "react-router-dom";
import { ERouteNames } from "~/routes/routeNames";

export function AuthorizationButton() {
  const modalState = useModalState();
  const { authenticatedUser } = useAuth();
  const navigate = useNavigate();

  const handleButton = () => {
    !authenticatedUser
      ? modalState.handleMainModalOpen()
      : navigate(
          authenticatedUser?.type === "patient"
            ? ERouteNames.PATIENT_ACCOUNT
            : ERouteNames.DOCTOR_ACCOUNT
        );
  };

  return (
    <ModalContext.Provider value={modalState}>
      <Button
        variant="outlined"
        onClick={handleButton}
        startIcon={<PersonIcon fontSize="small" />}
      >
        {authenticatedUser ? "Особистий кабінет" : "Увійти"}
      </Button>

      <FormModal />

      <ThanksModal />

      <PersonalIdentification />
    </ModalContext.Provider>
  );
}
