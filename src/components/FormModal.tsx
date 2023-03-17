import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import logoModal from "../assets/images/logo_modal.png";

type FormModalProps = {
  open: boolean;
  handleClose: () => void;
};

export default function FormModal({ open, handleClose }: FormModalProps) {
  const theme = useTheme();
  const primaryColor = "#3ABD98";
  const secondaryColor = "#FFFFFF";
  // const contrastColor = theme.palette.getContrastText(bgColor);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
    >
      <DialogContent sx={{ backgroundColor: primaryColor }}>
        <DialogActions>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon fontSize="large" sx={{ color: secondaryColor }} />
          </IconButton>
        </DialogActions>

        <img src={logoModal} alt="logo sign in / sign up" />

        <DialogTitle>Subscribe</DialogTitle>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <DialogActions>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
