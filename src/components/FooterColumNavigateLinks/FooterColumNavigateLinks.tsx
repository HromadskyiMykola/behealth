import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { FooterColumNavigateLinksProps } from "../../common/types_and_interfaces";

const FooterColumNavigateLinks = ({
  title,
  links,
  itIsLink = true,
}: FooterColumNavigateLinksProps) => {
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
        return itIsLink ? (
          <Link
            key={name}
            to={path === undefined ? "/" : path}
            style={{ textDecoration: "none", color: "#4C635A" }}
          >
            <Typography variant="caption" color="#4C635A">
              {name}
            </Typography>
          </Link>
        ) : (
          <Typography variant="caption" color="#4C635A" key={name}>
            {name}
          </Typography>
        );
      })}
    </Box>
  );
};

export default FooterColumNavigateLinks;
