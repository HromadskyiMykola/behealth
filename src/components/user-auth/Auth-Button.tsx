import { useNavigate } from "react-router-dom";

import { IconButton, useTheme } from "@mui/material";
import { UserIcon } from "lucide-react";

import { useAuthProvider, useModalState } from "~/providers";
import { EUserType } from "~/common";
import { ERouteNames } from "~/routes/routeNames";

import { FormModal } from ".";
import { ButtonM } from "../atomic";

export const AuthButton = () => {
  const { setOpenMainModal } = useModalState();
  const { authenticatedUser } = useAuthProvider();
  const navigate = useNavigate();
  const { palette } = useTheme();

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
      <IconButton
        aria-label="user-account"
        onClick={handleButton}
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <UserIcon size={24} color={palette.text.primary} />
      </IconButton>

      <ButtonM
        variant="outlined"
        onClick={handleButton}
        startIcon={<UserIcon style={{ flexShrink: 0 }} size={20} />}
        sx={{
          display: { xs: "none", md: "inline-flex" },
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </ButtonM>

      <FormModal />
    </>
  );
};
