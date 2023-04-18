import React from "react";
import { Box } from "@mui/material";
import {
  CLINIC_CARD_LIST,
  IClinicCard,
} from "~/components/clinic/clinic-card-constants";
import { SmallClinicCard } from "~/components/clinic/SmallClinicCard";

export const Clinics = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {CLINIC_CARD_LIST.map((card: IClinicCard) => (
        <SmallClinicCard card={card} />
      ))}
    </Box>
  );
};
