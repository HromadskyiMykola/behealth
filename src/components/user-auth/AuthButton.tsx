import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { FormModal } from ".";
import { ModalStateProvider, useAuth, useModalState } from "../../providers";
import { useNavigate } from "react-router-dom";
import { ERouteNames } from "~/routes/routeNames";
import { SimpleModal } from "../atomic";
import { EUserType } from "~/common";

const NestedButton = () => {
  const { setOpenMainModal } = useModalState();
  const { authenticatedUser } = useAuth();
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

      <SimpleModal />
    </ModalStateProvider>
  );
};
