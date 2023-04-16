import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export interface IIconSocialProps {
  link: string;
  name: string;
  icon: ReactNode;
}

export const IconSocial: FC<IIconSocialProps> = ({ link, icon, name }) => {
  return (
    <Link
      to={link}
      style={{
        textDecoration: "none",
        display: "flex",
        gap: "12px",
        alignItems: "center",
        padding: "8px 12px",
        backgroundColor: "#DCF7EA",
        borderRadius: "10px",
      }}
    >
      {icon}
      <Typography variant="button" color="#00382A">
        {name}
      </Typography>
    </Link>
  );
};
