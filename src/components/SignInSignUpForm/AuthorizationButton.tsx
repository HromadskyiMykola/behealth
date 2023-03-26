import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { ModalContext, useModalState } from "./ModalContext";
import FormModal from "./MainModal";
import ThanksModal from "./ThanksModal";
import PersonalIdentification from "./PersonalIdentification";

function AuthorizationButton() {
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

export default AuthorizationButton;
