import React from "react";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { FooterColumNavigateLinksProps } from "../../common/types-and-interfaces";
import { GoogleMapLink } from "~/components/atomic";

const FooterColumNavigateLinks = ({
  title,
  links,
}: FooterColumNavigateLinksProps) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        flexDirection: "column",
        color: "#4C635A",
      }}
    >
      <Typography
        variant="caption"
        style={{
          display: "block",
          marginBottom: "8px",
          color: "#97B1A5",
        }}
      >
        {title}
      </Typography>
      {links.map(({ name, path }) => {
        return (
          <Link
            key={name}
            to={path === undefined ? "/" : path}
            style={{ textDecoration: "none", color: "#4C635A" }}
          >
            <Typography variant="caption" color="#4C635A">
              {name}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
};

export default FooterColumNavigateLinks;
