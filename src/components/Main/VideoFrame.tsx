import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUILink } from "./MUILink";
import Video from "./Video";

export const VideoFrame = () => {
  return (
    <Box pb={{ xs: "61px", md: "120px" }} bgcolor="#f7fcf9">
      <Container
        sx={{
          display: "flex",
          gap: "32px",
          alignItems: " center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box>
          <Video />
        </Box>
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              md: "448px",
            },
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              typography: { xs: "subtitle1", md: "h4" },
            }}
          >
            Медична реформа, чому це важливо?
          </Typography>
          <Typography
            sx={{
              typography: { xs: "body2", md: "body1" },
            }}
          >
            Саме реформа дозволить реалізувати принцип «гроші за пацієнтом»,
            коли лікар отримуватиме оплату за надані послуги в залежності від
            кількості підписаних декларацій і закріплених за ним пацієнтів.
          </Typography>
          <MUILink text="Дізнатися більше" path="/" />
        </Box>
      </Container>
    </Box>
  );
};
