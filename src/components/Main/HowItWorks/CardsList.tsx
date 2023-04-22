import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { CardItem } from "./CardItem";
import { HOW_IT_WORKS_CARD_LIST } from "~/components/Main/main.constants";

export const CardsList = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{
        xs: "column",
        md: "row",
      }}
      gap={{
        xs: "16px",
        md: "32px",
      }}
    >
      {HOW_IT_WORKS_CARD_LIST.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </Box>
  );
};
