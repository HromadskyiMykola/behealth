import React from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  POP_UP_DOC_APPOINTMENT_2_ALERT,
  POP_UP_DOC_APPOINTMENT_2_GRATITUDE,
  POP_UP_DOC_APPOINTMENT_2_TITLE,
} from "~/components/Small-card-doctor/constants-small-card-doctor";
import Button from "@mui/material/Button";
import { TextWithIcon } from "~/components/atomic";
import { AlertTriangle, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ERouteNames } from "~/routes/routeNames";

const ModalPaper = styled(Paper)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "540px",
  padding: "32px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));
const BoxText = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
  boxShadow: "none",
}));
const CloseBox = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute" as "absolute",
  top: "21px",
  right: "21px",
  width: "25px",
  height: "25px",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.custom.primary50,
}));
export const PopUpDocAppointment2 = ({ close }: any) => {
  const navigate = useNavigate();
  return (
    <ModalPaper>
      <CloseBox onClick={() => close()}>
        <X size="24px" />
      </CloseBox>
      <BoxText>
        <Typography variant="h5">{POP_UP_DOC_APPOINTMENT_2_TITLE}</Typography>
      </BoxText>
      <BoxText>
        <TextWithIcon>
          <AlertTriangle size="24px" />
          <Typography variant="caption" component="p">
            {POP_UP_DOC_APPOINTMENT_2_ALERT}
          </Typography>
        </TextWithIcon>
        <Typography variant="subtitle2">
          {POP_UP_DOC_APPOINTMENT_2_GRATITUDE}
        </Typography>
      </BoxText>
      <Button
        variant="contained"
        fullWidth
        onClick={() => navigate("/" + ERouteNames.PATIENT_ACCOUNT)}
      >
        Особистий кабінет
      </Button>
    </ModalPaper>
  );
};
