import React from "react";
import { Box, Typography } from "@mui/material";

interface NewsBlockProps {
  news: any;
}

export const NewsBlock = ({ news: { icon, description } }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img src={icon} alt="Chanel" width={120} height={80} />
      <Typography
        sx={{ color: "#647C72", textAlign: "center" }}
        variant={"body1"}
      >
        {description}
      </Typography>
    </Box>
  );
};
