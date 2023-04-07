import React from "react";
import Kyivstar from "../../assets/CustomIcon/Kyivstar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FooterContactPhoneProps } from "../../common/types-and-interfaces";

const FooterContactPhone = ({ icon, phone }: FooterContactPhoneProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {icon}
      <Typography variant="subtitle2" color={"#4C635A"}>
        {phone}
      </Typography>
    </Box>
  );
};

export default FooterContactPhone;
