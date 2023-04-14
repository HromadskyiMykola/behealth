import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IContactPhoneWithIcon } from "~/common";

const ContactPhoneWithIcon = ({
  icon,
  phone,
  order,
}: IContactPhoneWithIcon) => {
  return (
    <Box
      flex="1 1 150px"
      order={order}
      gap="10px"
      display="flex"
      flexDirection="row"
    >
      {icon}
      <Typography variant="caption">{phone}</Typography>
    </Box>
  );
};

export default ContactPhoneWithIcon;
