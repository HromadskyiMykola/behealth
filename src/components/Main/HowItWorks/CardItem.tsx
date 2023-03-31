import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

interface CardItemProps {
  card: any;
}

export const CardItem: FC<CardItemProps> = ({
  card: { id, image, title, text },
}) => {
  return (
    <Box
      sx={{
        padding: "24px 60px",
        border: "1px solid #4C635A",
        borderRadius: "26px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ marginBottom: "24px" }}
        src={image}
        alt="How it works image"
        width={160}
        height={160}
      />
      <Typography
        fontSize={"16px"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: "16px",
          background: " #002117",
          borderRadius: "50%",
          color: "white",
        }}
        variant={"h5"}
        width={36}
        height={36}
      >
        {id}
      </Typography>
      <Typography
        sx={{
          mb: "16px",
          borderBottom: "2px solid #3ABD98",
          pb: "4px",
          color: "#002117",
        }}
        variant={"h5"}
      >
        {title}
      </Typography>
      <Typography sx={{ textAlign: "center" }} variant={"body2"}>
        {text}
      </Typography>
    </Box>
  );
};
