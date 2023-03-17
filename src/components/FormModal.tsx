// import * as React from "react";
import {
  Button,
  TextField,
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

import logoModal from "../assets/images/logo_modal.png";
import SignInSignUpForm from "./SignInSignUpForm";

type FormModalProps = {
  open: boolean;
  handleClose: () => void;
};

const primaryColor = "#3ABD98";
const secondaryColor = "#FFFFFF";

export default function FormModal({ open, handleClose }: FormModalProps) {
  const theme = useTheme();
  // const contrastColor = theme.palette.getContrastText(bgColor);
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": { borderRadius: mobileDevice ? 0 : "26px" }
        
      }}
      fullWidth
      maxWidth="md"
      fullScreen={mobileDevice}
      open={open}
      onClose={handleClose}
    >
      <DialogContent sx={{ backgroundColor: primaryColor}}>
        <DialogActions sx={{ p: 0 }}>
          <IconButton
            sx={{ p: 0, color: secondaryColor }}
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </DialogActions>

        {/* <Container maxWidth="sm"> */}
        <Grid container spacing={3}
          // sx={{ m }}
        >
          <Grid item xs>
            <DialogTitle
              sx={{ pl: 0, typography: "h3", color: secondaryColor }}
            >
              Авторизація
            </DialogTitle>

            <DialogContentText
              sx={{ pl: 0, typography: "body1", color: secondaryColor }}
            >
              Слідкуй за здоровʼям за допомогою кабінету
              <br />
              beHealth.ua
            </DialogContentText>

            <img
              src={logoModal}
              style={{
                maxWidth: "100%",
                display: mobileDevice ? "none" : "block",
              }}
              alt="logo sign in / sign up"
            />
          </Grid>

          <Grid item xs>
            <SignInSignUpForm />

            {/* <DialogActions>
              <Button onClick={handleClose}>Subscribe</Button>
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
