import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FooterContactPhone from "../FooterContactPhone/FooterContactPhone";
import {
  CONTACT_PHONES_KYIVSTAR,
  CONTACT_PHONES_LIFE,
  CONTACT_PHONES_VODAFON,
} from "../Footer/footer.constant";

const FooterHelpLine = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        pt: "40px",
        pb: "26px",
      }}
    >
      <Typography variant="body2" color={"#4C635A"}>
        пн вт ср чт пт сб нд / 09:00-20:00
      </Typography>
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
    </Box>
  );
};

export default FooterHelpLine;
