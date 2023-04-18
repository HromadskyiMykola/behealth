import { useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { EAuthMode } from "~/common";
import { useModalState } from "~/providers";

import { AuthForm } from ".";

import logoSignIn from "~/assets/images/logo_sign_in.png";
import logoSignUp from "~/assets/images/logo_sign_up.png";

const secondaryColor = "#FFFFFF";

export function FormModal() {
  const {
    palette: {
      primary: { main: primaryColor },
    },
  } = useTheme();

  const { openMainModal, setOpenMainModal } = useModalState();

  const [mode, setMode] = useState<EAuthMode>(EAuthMode.LOGIN);
  const isLoginMode = mode === EAuthMode.LOGIN;
  const isRegisterMode = mode === EAuthMode.REGISTER;
  const isRecoveryMode = mode === EAuthMode.RECOVERY;

  const theme = useTheme();

  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": { borderRadius: mobileDevice ? 0 : "26px" },
      }}
      // fullWidth
      maxWidth="lg"
      fullScreen={mobileDevice}
      scroll={"body"}
      open={openMainModal}
      onClose={() => setOpenMainModal(false)}
    >
      <DialogContent
        sx={{
          height: { xs: "100vh", sm: "auto" },
          maxWidth: "1000px",
          p: "80px",
          backgroundColor: primaryColor,
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            p: 0,
            top: "28px",
            right: "28px",
            color: secondaryColor,
          }}
          aria-label="close"
          onClick={() => setOpenMainModal(false)}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <Grid container spacing="32px" alignItems="center">
          <Grid item md={5} sx={{ display: { xs: "none", md: "block" } }}>
            {!isRecoveryMode && (
              <DialogTitle
                sx={{ pl: 0, typography: "h3", color: secondaryColor }}
              >
                {isLoginMode ? "Авторизація" : "Реєстрація"}
              </DialogTitle>
            )}

            {!isRecoveryMode && (
              <Typography variant="body2" sx={{ color: secondaryColor }}>
                {isLoginMode ? "Авторизуйтесь" : "Зареєструйтесь"}
                {", щоб отримати доступ до особистого кабінету beHealth."}
              </Typography>
            )}

            <img
              src={isLoginMode ? logoSignIn : logoSignUp}
              style={{
                maxWidth: "100%",
                display: mobileDevice ? "none" : "block",
              }}
              alt="logo sign in / sign up"
            />
          </Grid>

          <Grid item xs md={7}>
            <AuthForm mode={mode} setMode={setMode} />
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
