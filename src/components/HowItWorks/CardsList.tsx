import React from "react";
import { Box } from "@mui/material";
import { CardItem } from "./CardItem";
import howItWorks1 from "../../assets/images/how-it-work-1.png";
import howItWorks2 from "../../assets/images/how-it-work-2.png";
import howItWorks3 from "../../assets/images/how-it-work-3.png";

export const CardsList = () => {
  const list = [
    {
      id: 1,
      image: howItWorks1,
      title: "Оберіть лікаря",
      text: "Оберіть лікаря та запишіться на зручний час Оберіть лікаря та запишіться на зручний час",
    },
    {
      id: 2,
      image: howItWorks2,
      title: "Прийдіть на прийом",
      text: "Оберіть лікаря та запишіться на зручний час Оберіть лікаря та запишіться на зручний час",
    },
    {
      id: 3,
      image: howItWorks3,
      title: "Результати онлайн",
      text: "Оберіть лікаря та запишіться на зручний час Оберіть лікаря та запишіться на зручний час",
    },
  ];
  return (
    <Box sx={{ display: "flex", gap: "32px" }}>
      {list.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </Box>
  );
};
