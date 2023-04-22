import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

interface NewsBlockProps {
  news: any;
}

export const NewsBlock = ({ news: { icon, description } }: any) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <img src={icon} alt="Chanel" width={120} height={80} />
      <Typography
        sx={{
          color: "#647C72",
          textAlign: "center",
          width: {
            xs: "156px",
            sm: "328px",
          },
          my: "16px",
          mx: "auto",
          typography: {
            xs: "caption",
            md: "body1",
          },
        }}
        display="block"
      >
        {description}
      </Typography>
    </Box>
  );
};
