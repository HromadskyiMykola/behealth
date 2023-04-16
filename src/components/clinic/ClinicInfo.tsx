import React, { FC } from "react";
import { ClinicInfoAboutBlock } from "~/components/clinic/ClinicInfoAboutBlock";
import { Box, Typography } from "@mui/material";
import { ClinicMedicine } from "~/components/clinic/ClinicMedicine";
import { Chips } from "~/components/clinic/Chips";
import { ClinicCardProps } from "~/components/clinic/SmallClinicCard";
import { IconsSocialList } from "~/components/clinic/IconsSocialList";

export const ClinicInfo: FC<ClinicCardProps> = ({ card }) => {
  const { working, address, medicine, name, img, type, chips, phone } = card;

  return (
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
  );
};
