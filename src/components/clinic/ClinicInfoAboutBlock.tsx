import React, { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

export interface IClinicInfoAboutBlockProps {
  title: string;
  block: ReactNode;
}

export const ClinicInfoAboutBlock: FC<IClinicInfoAboutBlockProps> = ({
  title,
  block,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}
    >
      <Typography variant="subtitle1">{title}</Typography>
      {block}
    </Box>
  );
};
