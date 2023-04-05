import React, { FC } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ProfileAppointmentModalProps } from "~/common/types-and-interfaces";

export const ProfileAppointmentModal: FC<ProfileAppointmentModalProps> = ({
  targetButtonText,
  isOpen,
  closeModal,
  ...rest
}) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} {...rest}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          alignItems: "center",
          textAlign: "center",
          p: "32px",
          borderRadius: "12px",
          maxWidth: "452px",
          position: "relative",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{ position: "absolute", top: "16px", right: "16px" }}
        >
          <CloseRoundedIcon sx={{ color: "#3ABD98" }} />
        </IconButton>
        <Typography variant="h5">
          {targetButtonText === "Скасувати"
            ? "Скасування запису"
            : "Підтвердження запису"}
        </Typography>
        <Typography variant="body2">
          {targetButtonText === "Скасувати"
            ? "Ви впевнені, що хочете скасувати запис до Князєва Ольга Станіславівна на понеділок, 20-го березня 2023?"
            : "Ви впевнені, що хочете по запис до Князєва Ольга Станіславівна на понеділок, 20-го березня 2023?"}
        </Typography>
        <Box sx={{ display: "flex", gap: "24px" }}>
          <Button
            sx={{ color: "#DE3730", border: "1px solid #DE3730" }}
            variant="outlined"
          >
            <Typography variant="button">
              {targetButtonText === "Скасувати"
                ? "Скасувати запис"
                : "Скасувати"}
            </Typography>
          </Button>
          <Button variant="contained">
            <Typography variant="button">
              {targetButtonText === "Скасувати"
                ? "Я передумав(ла)"
                : "Підтвердити запис"}
            </Typography>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
