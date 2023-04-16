import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  CreditCardIcon,
  CrossIcon,
  ParkingSquareIcon,
  PuzzleIcon,
  WifiIcon,
} from "lucide-react";

export const Chips = ({ chips }: any) => {
  const chooseCard = (text: string) => {
    const iconProps = {
      color: "#597C8F",
      size: 16,
    };

    switch (text) {
      case "Паркинг":
        return <ParkingSquareIcon {...iconProps} />;
      case "Дитяча кімната":
        return <PuzzleIcon {...iconProps} />;
      case "Оплата картою":
        return <CreditCardIcon {...iconProps} />;
      case "Wi-Fi зона":
        return <WifiIcon {...iconProps} />;
      case "Аптека":
        return <CrossIcon {...iconProps} />;
    }
  };

  return (
    <Grid container spacing={2}>
      {chips.map((item: any) => (
        <Grid item key={item}>
          <Box
            sx={{
              bgcolor: "#FBFCFF",
              borderRadius: "6px",
              border: "1px solid #C3E8FE",
              p: "4px 10px 4px 8px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {chooseCard(item)}
            <Typography color="#406375" variant="caption">
              {item}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
