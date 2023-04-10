import React from "react";
import { Box } from "@mui/material";
import { CardItem } from "./CardItem";
import { HOW_IT_WORKS_CARD_LIST } from "~/components/Main/main.constants";

export const CardsList = () => {
  return (
    <Box sx={{ display: "flex", gap: "32px" }}>
      {HOW_IT_WORKS_CARD_LIST.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </Box>
  );
};
