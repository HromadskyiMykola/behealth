import React, { FC } from "react";
import { IconButton, Typography } from "@mui/material";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { MUILinkProps } from "~/common";

export const MUILink: FC<MUILinkProps> = ({ path, text }) => {
  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        display: "flex",
        gap: "8px",
        alignItems: "center",
        color: "#09A480",
      }}
    >
      <Typography sx={{ color: "#09A480" }} variant={"body2"}>
        {text}
      </Typography>
      <IconButton>
        <ArrowForwardIosRounded sx={{ color: "#09A480" }} fontSize={"small"} />
      </IconButton>
    </Link>
  );
};
