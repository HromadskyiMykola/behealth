import Box from "@mui/material/Box/Box";
import React from "react";
import Typography from "@mui/material/Typography";

const AdditionalContentData = () => {
  return (
    <Box
      sx={{
        marginTop: "8px",
        padding: "16px 32px",
        display: "flex",
        gap: "64px",
        border: "solid 1px #DBE5DF",
        borderRadius: "10px",
        background: "#FBFDF9",
      }}
    >
      <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
        <Typography variant="body1" color="#97B1A5" sx={{ display: "block" }}>
          Тип
        </Typography>
        <Typography
          variant="subtitle2"
          color="#00382A"
          sx={{ display: "block" }}
        >
          Адреса перебування
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
        <Typography variant="body1" color="#97B1A5">
          Адреса
        </Typography>
        <Typography variant="subtitle2" color="#00382A">
          м. Київ; вул. Шевченка Тараса (Троєщина), 7; буд. 1
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
        <Typography variant="body1" color="#97B1A5">
          Квартира
        </Typography>
        <Typography variant="subtitle2" color="#00382A">
          1
        </Typography>
      </Box>
    </Box>
  );
};

export default AdditionalContentData;
