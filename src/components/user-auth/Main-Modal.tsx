import { useState } from "react";
import {
  useTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { TAuthMode, useDeviceType } from "~/common";
import { useModalState } from "~/providers";

import { AuthForm } from ".";

import logoSignIn from "~/assets/images/logo_sign_in.png";
import logoSignUp from "~/assets/images/logo_sign_up.png";

export function FormModal() {
  const { openMainModal, setOpenMainModal } = useModalState();
  const { palette, breakpoints } = useTheme();
  // const isWidth380px = useMediaQuery(breakpoints.down("mobile"));
  const isSmDown = useMediaQuery(breakpoints.down("sm"));
  const isMobile = useDeviceType();

  const [mode, setMode] = useState<TAuthMode>({ isLoginMode: true });

  const { custom, primary } = palette;

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": { borderRadius: isMobile ? 0 : "26px" },
      }}
      maxWidth="md"
      fullScreen={isMobile}
      scroll={"body"}
      open={openMainModal}
      onClose={() => setOpenMainModal(false)}
    >
      <DialogContent
        sx={{
          minWidth: "380px",
          maxWidth: "1000px",
          p: isMobile ? "16px" : "80px",
          backgroundColor: primary.main,

          justifyContent: "center",
          height: "100%",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            p: 0,
            top: isMobile ? "22px" : "28px",
            right: isMobile ? "22px" : "28px",
            color: custom.primary100,
          }}
          aria-label="close"
          onClick={() => setOpenMainModal(false)}
        >
          <CloseIcon fontSize={isMobile ? "medium" : "large"} />
        </IconButton>

        <Grid
          container
          spacing="32px"
          alignItems="center"
          direction={isSmDown ? "column" : "row"}
        >
          <Grid item xs={12} sm={5} tablet={6}>
            {!mode.isRecoveryMode && (
              <DialogTitle
                sx={{
                  maxWidth: "442px",
                  pl: 0,
                  pt: 0,
                  typography: "h3",
                  color: custom.primary100,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {mode.isLoginMode ? "Авторизація" : "Реєстрація"}
              </DialogTitle>
            )}

            {!mode.isRecoveryMode && (
              <Typography
                variant="body2"
                maxWidth="442px"
                sx={{ color: custom.primary100 }}
                paragraph={isSmDown}
              >
                {mode.isLoginMode ? "Авторизуйтесь" : "Зареєструйтесь"}, щоб
                отримати доступ до особистого кабінету beHealth.
              </Typography>
            )}

            <img
              src={mode.isLoginMode ? logoSignIn : logoSignUp}
              style={{
                maxWidth: "100%",
                display: isSmDown ? "none" : "block",
              }}
              alt="logo sign in / sign up"
            />
          </Grid>

          <Grid item xs={12} sm={7} tablet={6}>
            <AuthForm mode={mode} setMode={setMode} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
