import { useState } from "react";
import {
  useTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { TAuthMode, useDeviceType } from "~/common";
import { useModalState } from "~/providers";

import { AuthForm } from ".";

import logoSignIn from "~/assets/images/logo_sign_in.png";
import logoSignUp from "~/assets/images/logo_sign_up.png";

export function FormModal() {
  const { openMainModal, setOpenMainModal } = useModalState();
  const isMobile = useDeviceType();

  const [mode, setMode] = useState<TAuthMode>({ isLoginMode: true });

  const theme = useTheme();
  const { custom, primary } = theme.palette;

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": { borderRadius: isMobile ? 0 : "26px" },
      }}
      // fullWidth
      maxWidth="lg"
      fullScreen={isMobile}
      scroll={"body"}
      open={openMainModal}
      onClose={() => setOpenMainModal(false)}
    >
      <DialogContent
        sx={{
          height: { xs: "100vh", sm: "auto" },
          maxWidth: "1000px",
          p: "80px",
          backgroundColor: primary.main,
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            p: 0,
            top: "28px",
            right: "28px",
            color: custom.primary100,
          }}
          aria-label="close"
          onClick={() => setOpenMainModal(false)}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <Grid container spacing="32px" alignItems="center">
          <Grid item md={5} sx={{ display: { xs: "none", md: "block" } }}>
            {!mode.isRecoveryMode && (
              <DialogTitle
                sx={{
                  pl: 0,
                  typography: "h3",
                  color: custom.primary100,
                }}
              >
                {mode.isLoginMode ? "Авторизація" : "Реєстрація"}
              </DialogTitle>
            )}

            {!mode.isRecoveryMode && (
              <Typography variant="body2" sx={{ color: custom.primary100 }}>
                {mode.isLoginMode ? "Авторизуйтесь" : "Зареєструйтесь"}, щоб
                отримати доступ до особистого кабінету beHealth.
              </Typography>
            )}

            <img
              src={mode.isLoginMode ? logoSignIn : logoSignUp}
              style={{
                maxWidth: "100%",
                display: isMobile ? "none" : "block",
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
