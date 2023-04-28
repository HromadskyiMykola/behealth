import React from "react";
import Kyivstar from "../../assets/CustomIcon/Kyivstar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FooterContactPhoneProps } from "../../common/types-and-interfaces";
import { styled, Tab } from "@mui/material";

const Link = styled("a")(() => ({
  textDecoration: "none",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  flexWrap: "nowrap",
}));
const FooterContactPhone = ({ icon, phone }: FooterContactPhoneProps) => {
  return (
    <Link href={`tel:${phone}`}>
      {icon}
      <Typography
        variant="subtitle2"
        color={"#4C635A"}
        component="p"
        sx={{ whiteSpace: "nowrap" }}
      >
        {phone}
      </Typography>
    </Link>
  );
};

export default FooterContactPhone;
