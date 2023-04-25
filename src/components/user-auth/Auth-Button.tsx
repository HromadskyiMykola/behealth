import { useNavigate } from "react-router-dom";
import { UserIcon } from "lucide-react";

import { useAuthProvider, useModalState } from "~/providers";
import { EUserType } from "~/common";
import { ERouteNames } from "~/routes/routeNames";

import { FormModal } from ".";
import { ButtonM } from "../atomic";
import { Typography } from "@mui/material";

export const AuthButton = () => {
  const { setOpenMainModal } = useModalState();
  const { authenticatedUser } = useAuthProvider();
  const navigate = useNavigate();

  const text = !authenticatedUser ? "Увійти" : "Особистий кабінет";

  const handleButton = () => {
    !authenticatedUser
      ? setOpenMainModal(true)
      : navigate(
          authenticatedUser?.type === EUserType.PATIENT
            ? ERouteNames.PATIENT_ACCOUNT
            : ERouteNames.DOCTOR_ACCOUNT
        );
  };

  return (
    <>
      <Typography
        variant="body2"
        onClick={handleButton}
        sx={{ cursor: "pointer", display: { xs: "block", md: "none" } }}
      >
        {text}
      </Typography>

      <ButtonM
        variant="outlined"
        onClick={handleButton}
        startIcon={<UserIcon style={{ flexShrink: 0 }} size={20} />}
        sx={{ display: { xs: "none", md: "inline-flex" } }}
      >
        {text}
      </ButtonM>

      <FormModal />
    </>
  );
};
