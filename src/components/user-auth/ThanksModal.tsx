import  { useContext, useState } from "react";
import {
  Button,
  Dialog,
  Stack,
  Typography,
} from "@mui/material";

import { ModalContext } from "./ModalContext";
import { bell } from "../../assets/icons";

export default function ThanksModal() {
  const { openThanksModal, handleThanksModalClose } = useContext(ModalContext);

  return (
    <Dialog
      open={openThanksModal}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius:
            // mobileDevice ? 0 :
            "12px",
        },
      }}
      onClose={handleThanksModalClose}
    >
      <Stack padding="32px" gap="16px" direction="column" alignItems="center">
        <Typography variant="h5" mb="16px">
          {"Дякуємо за реєстрацію!"}
        </Typography>

        <Typography
          sx={{ display: "flex", alignItems: "center", color: "#7D968B" }}
        >
          <img
            src={bell}
            alt="bell"
            style={{ width: 24, height: 24, marginRight: 18 }}
          />
          {"Перевірте свою електронну пошту та папку “Спам”"}
        </Typography>

        <Typography textAlign="center">
          {
            "Натисніть на посилання, яке ми відправили Вам у листі на вказану електронну пошту tarshevchenko@gmail.com"
          }
        </Typography>

        <Button fullWidth variant="contained" sx={{ mt: "16px" }}>
          {"Відправити повторний лист"}
        </Button>
      </Stack>
    </Dialog>
  );
}
