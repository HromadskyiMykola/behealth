import React from "react";
import FooterContactPhone from "../FooterContactPhone/FooterContactPhone";
import {
  CONTACT_PHONES_KYIVSTAR,
  CONTACT_PHONES_LIFE,
  CONTACT_PHONES_VODAFON,
} from "../Footer/footer.constant";
import Box from "@mui/material/Box";

export const MobileIconsList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <FooterContactPhone
        icon={CONTACT_PHONES_KYIVSTAR.icon}
        phone={CONTACT_PHONES_KYIVSTAR.phone}
      />
      <FooterContactPhone
        icon={CONTACT_PHONES_LIFE.icon}
        phone={CONTACT_PHONES_LIFE.phone}
      />
      <FooterContactPhone
        icon={CONTACT_PHONES_VODAFON.icon}
        phone={CONTACT_PHONES_VODAFON.phone}
      />
    </Box>
  );
};
