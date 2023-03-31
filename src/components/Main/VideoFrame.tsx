import React from "react";
import { Box, Container, Typography } from "@mui/material";
import videoImage from "../../assets/images/video-frame.png";
import { MUILink } from "./MUILink";

export const VideoFrame = () => {
  return (
    <Box sx={{ pb: "120px", background: "#f7fcf9" }}>
      <Container sx={{ display: "flex", gap: "32px", alignItems: " center" }}>
        <Box>
          <img
            src={videoImage}
            alt={"Video frame"}
            width={928}
            height={528}
            style={{ borderRadius: "26px", position: "relative" }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: "448px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography variant={"h4"} sx={{ textAlign: "left" }}>
            Медична реформа, чому це важливо?
          </Typography>
          <Typography variant={"body1"}>
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
