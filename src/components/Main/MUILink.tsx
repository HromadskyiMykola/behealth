import React, { FC } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { MUILinkProps } from "~/common";
import { ChevronRightIcon } from "lucide-react";

export const MUILink: FC<MUILinkProps> = ({ path, text }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        display: "flex",
        gap: sm ? "4px" : "8px",
        alignItems: "center",
        color: "#09A480",
      }}
    >
      <Typography
        color="#09A480"
        sx={{
          typography: {
            xs: "captionS",
            md: "button",
          },
        }}
      >
        {text}
      </Typography>
      <ChevronRightIcon color="#09A480" size={sm ? 14 : 24} />
    </Link>
  );
};
