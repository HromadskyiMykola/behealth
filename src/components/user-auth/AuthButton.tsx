import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { ModalContext, useModalState } from "~/context";
import { FormModal, ThanksModal, PersonalIdentification } from ".";

export function AuthorizationButton() {
  const modalState = useModalState();

  return (
    <ModalContext.Provider value={modalState}>
      <Button
        variant="outlined"
        onClick={modalState.handleMainModalOpen}
        startIcon={<PersonIcon fontSize="small" />}
      >
        {
          // userIsLoggedIn ?  "Особистий кабінет" :
          "Увійти"
        }
      </Button>

      <FormModal />

      <ThanksModal />

      <PersonalIdentification />
    </ModalContext.Provider>
  );
}
