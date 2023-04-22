import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { WhyUsContentProps } from "~/common";

export const WhyUsContent = ({
  items: { title, description, link, arrayItems },
}: WhyUsContentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Typography
        color="#333333"
        sx={{
          typography: {
            xs: "subtitle1",
            md: "h4",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        color="#7D968B"
        sx={{
          typography: {
            xs: "body2",
            md: "body1",
          },
        }}
      >
        {description}
      </Typography>
      {link}
      <Grid container spacing={2}>
        {arrayItems.map(({ title, description, icon }) => {
          return (
            <Grid key={title} item xs={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: {
                    xs: "12px",
                    md: "24px",
                  },
                  border: "1px solid #cee9dc",
                  borderRadius: "12px",
                  height: {
                    xs: "214px",
                    md: "196px",
                  },
                }}
              >
                {icon}
                <Typography
                  display="block"
                  color="#00382A"
                  sx={{
                    m: {
                      xs: "8px 0 4px 0",
                      md: "16px 0 8px 0",
                    },
                    typography: {
                      xs: "caption",
                      md: "subtitle1",
                    },
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  display="block"
                  color="#7D968B"
                  sx={{
                    typography: {
                      xs: "captionS",
                      md: "caption",
                    },
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
