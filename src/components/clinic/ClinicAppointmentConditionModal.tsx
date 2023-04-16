import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

export interface ClinicAppointmentConditionModalProps {
  isOpenCondition: boolean;
  setIsOpenCondition: (b: boolean) => void;
}

export const ClinicAppointmentConditionModal: FC<
  ClinicAppointmentConditionModalProps
> = ({ isOpenCondition, setIsOpenCondition }) => {
  return (
    <Dialog open={isOpenCondition} onClose={() => setIsOpenCondition(false)}>
      <DialogContent sx={{ p: "20px 24px" }}>
        <DialogTitle
          sx={{ p: 0, pb: "20px", borderBottom: "1px solid #7D968B" }}
        >
          Згода на обробку персональних даних порталом "BeHealth"
        </DialogTitle>
        <DialogContentText sx={{ pt: "20px" }}>
          Даю згоду на обробку моїх персональних даних порталом "BeHealth"
          (https://behealth-phi.vercel.app/) з метою обробки даних. Я також
          підтверджую, що ознайомлений(-на) з умовами та політикою
          конфіденційності порталу "BeHealth", та погоджуюся з ними. Я розумію,
          що мої персональні дані будуть оброблятися відповідно до законодавства
          України та політики конфіденційності порталу "BeHealth".
        </DialogContentText>
        <DialogActions>
          <Button onClick={() => setIsOpenCondition(false)} variant="text">
            <Typography variant="button">Закрити</Typography>
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
