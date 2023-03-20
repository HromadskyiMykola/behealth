import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import logoSignIn from "../../assets/images/logo_sign_in.png";
import logoSignUp from "../../assets/images/logo_sign_up.png";
import SignInSignUpForm from "./SignInSignUpForm";
import { authorizationMode } from "../../common/types_and_interfaces";

type Props = {
  open: boolean;
  handleMainModalClose: () => void;
};

const primaryColor = "#3ABD98";
const secondaryColor = "#FFFFFF";

export default function FormModal({ open, handleMainModalClose }: Props) {
  const [mode, setMode] = useState<authorizationMode>("LOGIN");
  const isLoginMode: boolean = mode === "LOGIN";
  const isRegisterMode: boolean = mode === "REGISTER";
  const isRecoveryMode: boolean = mode === "RECOVERY";

  const theme = useTheme();

  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": { borderRadius: mobileDevice ? 0 : "26px" },
      }}
      fullWidth
      maxWidth="md"
      fullScreen={mobileDevice}
      open={open}
      onClose={handleMainModalClose}
    >
      <DialogContent sx={{ backgroundColor: primaryColor }}>
        <DialogActions sx={{ p: 0 }}>
          <IconButton
            sx={{ p: 0, color: secondaryColor }}
            aria-label="close"
            onClick={handleMainModalClose}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </DialogActions>

        {/* <Container maxWidth="sm"> */}
        <Grid
          container
          spacing={3}
          // sx={{ m }}
        >
          <Grid item xs>
            <DialogTitle
              sx={{ pl: 0, typography: "h3", color: secondaryColor }}
            >
              {"Авторизація"}
            </DialogTitle>

            <DialogContentText
              sx={{ pl: 0, typography: "body1", color: secondaryColor }}
            >
              {"Слідкуй за здоровʼям за допомогою кабінету"}
              <br />
              {"beHealth.ua"}
            </DialogContentText>

            <img
              src={isLoginMode ? logoSignIn : logoSignUp}
              style={{
                maxWidth: "100%",
                display: mobileDevice ? "none" : "block",
              }}
              alt="logo sign in / sign up"
            />
          </Grid>

          <Grid item xs>
            <SignInSignUpForm mode={mode} setMode={setMode} />

            {/* <DialogActions>
              <Button onClick={handleModalClose}>Subscribe</Button>
            </DialogActions> */}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

////////////////////////////////////////////////
// const showMode = (mode: Mode) => {
//   switch (mode) {
//     case "LOGIN":
//       return "Авторизація";

//     case "REGISTER":
//       return "Реєстрація";

//     case "RECOVERY":
//       return "Відновлення паролю";

//     default:
//       return "beHealth";
//   }
// };
//////////////////////////////////////////////
