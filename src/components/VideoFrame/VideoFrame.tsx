import React from "react";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import videoImage from "../../assets/images/video-frame.png";
import { Play } from "lucide-react";

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
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              color: "#09A480",
            }}
          >
            <Typography variant={"body2"}>Дізнатися більше</Typography>
            <IconButton>
              <ArrowForwardIosRounded
                sx={{ color: "#09A480" }}
                fontSize={"small"}
              />
            </IconButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
