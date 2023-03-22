import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FooterInfoBlogProps } from "../../common/types_and_interfaces";

const FooterInfoBlock = ({ title, text }: FooterInfoBlogProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography
        variant="caption"
        sx={{ display: "block", color: "#97B1A5", mb: "8px" }}
      >
        {title}
      </Typography>
      {text.map((item, index) => {
        return (
          <Typography variant="caption" sx={{ color: "#4C635A" }} key={index}>
            {item}
          </Typography>
        );
      })}
    </Box>
  );
};

export default FooterInfoBlock;
