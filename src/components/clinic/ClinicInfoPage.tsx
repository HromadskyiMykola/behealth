import { Box } from "@mui/material";
import React from "react";
import { ClinicAboutInfoHeader } from "~/components/clinic/ClinicAboutInfoHeader";
import { ClinicInfo } from "~/components/clinic/ClinicInfo";
import { CLINIC_CARD } from "~/components/clinic/clinic-card-constants";
import { MainClinicCard } from "~/components/clinic/MainClinicCard";
import { SmallClinicCard } from "~/components/clinic/SmallClinicCard";

export const ClinicInfoPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SmallClinicCard card={CLINIC_CARD}/>
      <MainClinicCard card={CLINIC_CARD} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          p: "32px",
          bgcolor: "#fff",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.04)",
          borderRadius: "12px",
        }}
      >
        <ClinicAboutInfoHeader />
        <ClinicInfo card={CLINIC_CARD} />
      </Box>
    </Box>
  );
};
