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
        width: "600px",
      }}
    >
      <Typography sx={{ color: "#333333" }} variant="h4">
        {title}
      </Typography>
      <Typography sx={{ color: "#7D968B" }} variant="body1">
        {description}
      </Typography>
      {link}
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "0",
          "& > :first-of-type": {
            paddingLeft: 0,
          },

          "& > :nth-of-type(2n + 1)": {
            paddingLeft: 0,
          },
        }}
      >
        {arrayItems.map(({ title, description, icon }) => {
          return (
            <Grid key={title} item xs={6}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: "24px",
                  border: "1px solid #cee9dc",
                  borderRadius: "12px",
                }}
              >
                {icon}
                <Typography
                  sx={{
                    m: "16px 0 8px 0",
                    color: "##00382A",
                  }}
                  variant="subtitle1"
                >
                  {title}
                </Typography>
                <Typography sx={{ color: "##7D968B" }} variant="caption">
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
