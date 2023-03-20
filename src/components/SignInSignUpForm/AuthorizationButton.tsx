import { useState } from "react";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import FormModal from "./MainModal";
import ThanksModal from "./ThanksModal";

function AuthorizationButton() {
  const [open, setOpen] = useState(false);

  const handleMainModalOpen = () => setOpen(true);
  const handleMainModalClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="outlined"
        className="_headerSingInButton"
        onClick={handleMainModalOpen}
        startIcon={<PersonIcon fontSize="small" />}
      >
        {
          // userIsLoggedIn ?  "Особистий кабінет" :
          "Увійти"
        }
      </Button>

          <FormModal open={open} handleMainModalClose={handleMainModalClose} />
          
          {/* <ThanksModal /> */}
    </>
  );
}

export default AuthorizationButton;
