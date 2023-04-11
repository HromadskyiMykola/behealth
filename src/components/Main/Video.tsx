import React, { useRef, useState } from "react";
import { Box, Card, CardActionArea, CardMedia } from "@mui/material";
import { Play } from "lucide-react";

const Video = () => {
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
    <Card
      raised={true}
      sx={{
        borderRadius: "26px",
        overflow: "hidden",
        position: "relative",
        width: "928px",
        height: "528px",
        boxShadow: "none",
      }}
    >
      <CardActionArea onClick={handleVideoClick}>
        <CardMedia
          ref={videoRef}
          controls={showControl}
          component="video"
          //todo add source video
          src="https://assets.codepen.io/6093409/river.mp4"
        />
        {!play && (
          <Box
            position="absolute"
            top="40%"
            left="45%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="80px"
            width="80px"
            borderRadius="200px"
            bgcolor="rgba(255, 255, 255, 0.15)"
          >
            <Play color="#E7FFF3" />
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
};

export default Video;
