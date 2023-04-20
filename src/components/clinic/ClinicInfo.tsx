import { Box, Typography } from "@mui/material";
import React from "react";
import { SearchDocs } from "~/components/clinic/SearchDocs";
import { CLINIC_CARD } from "~/components/clinic/clinic-card-constants";
import { MainClinicCard } from "~/components/clinic/MainClinicCard";
import { SmallClinicCard } from "~/components/clinic/SmallClinicCard";
import { ClinicInfoAboutBlock } from "~/components/clinic/ClinicInfoAboutBlock";
import { ClinicMedicine } from "~/components/clinic/ClinicMedicine";
import { Chips } from "~/components/clinic/Chips";
import { IconsSocialList } from "~/components/clinic/IconsSocialList";

export const ClinicInfo = () => {
  const { working, address, medicine, name, img, type, chips, phone } = CLINIC_CARD;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
        <SearchDocs />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Typography variant="h5" color="#212121">
            Про клініку
          </Typography>
          <ClinicInfoAboutBlock
            title={"Напрямки роботи клініки"}
            block={<ClinicMedicine medicine={medicine} />}
          />
          <ClinicInfoAboutBlock
            title={"Зручності в медзакладі"}
            block={<Chips chips={chips} />}
          />
          <ClinicInfoAboutBlock
            title={"Соціальні мережі"}
            block={<IconsSocialList />}
          />
        </Box>
      </Box>
    </Box>
  );
};
