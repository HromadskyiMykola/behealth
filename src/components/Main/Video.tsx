import React, { useRef, useState, useEffect } from "react";
import { Box, Card, CardActionArea, CardMedia } from "@mui/material";
import { Play } from "lucide-react";

const Video = () => {
  const [play, setPlay] = useState(false);
  const [showControl, setShowControl] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null); // Додано посилання на відео-елемент

  useEffect(() => {
    if (videoRef.current) {
      play && videoRef.current?.play();
    }
    if (videoRef.current) {
      !play && videoRef.current?.pause();
    }
  }, [play]);

  return (
    <Card
      raised={true}
      sx={{
        borderRadius: "26px",
        position: "relative",
        // width: "928px",
        // height: "528px",
        boxShadow: "none",
      }}
      onMouseOver={() => setShowControl(true)}
      onMouseLeave={() => setShowControl(false)}
    >
      <CardActionArea>
        <CardMedia
          ref={videoRef}
          controls={showControl}
          component="video"
          //todo add source video
          src="https://assets.codepen.io/6093409/river.mp4"
          onEnded={() => setPlay(false)}
          onPause={() => setPlay(false)}
          onPlay={() => setPlay(true)}
        />
        {!play && (
          <Box
            position="absolute"
            display="flex"
            top='50%'
            right='50%'
            justifyContent="center"
            alignItems="center"
            height="80px"
            width="80px"
            borderRadius="200px"
            bgcolor="rgba(255, 255, 255, 0.15)"
            onClick={() => setPlay(true)}
            sx={{
              transform: "translate(50%, -50%)",
            }}
          >
            <Play color="#E7FFF3" />
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
};

export default Video;
