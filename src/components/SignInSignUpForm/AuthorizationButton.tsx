import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { ModalContext, useModalState } from "./ModalContext";
import FormModal from "./MainModal";
import ThanksModal from "./ThanksModal";

function AuthorizationButton() {
  const modalState = useModalState();

  return (
    <ModalContext.Provider value={modalState}>
      <Button
        variant="outlined"
        className="_headerSingInButton"
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
    </ModalContext.Provider>
  );
}

export default AuthorizationButton;
