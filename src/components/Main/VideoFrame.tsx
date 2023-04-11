import React, { useRef, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Play } from "lucide-react";
import videoImage from "../../assets/images/video-frame.png";
import { MUILink } from "./MUILink";
import Video from "./Video";

export const VideoFrame = () => {
  const [play, setPlay] = useState(false);
  const [showControl, setShowControl] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null); // Додано посилання на відео-елемент

  const handleVideoClick = () => {
    play && videoRef.current?.play(); // Виклик методу play() для відтворення відео
    !play && videoRef.current?.pause(); // Виклик методу play() для відтворення відео
    setPlay(!play);
    setShowControl(true);
  };
  return (
    <Box sx={{ pb: "120px", background: "#f7fcf9" }}>
      <Container sx={{ display: "flex", gap: "32px", alignItems: " center" }}>
        <Box>
          <Video />
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
