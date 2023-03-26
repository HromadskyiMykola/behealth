import React from "react";
import ain from "../../../assets/images/ain-chanel.png";
import ictv from "../../../assets/images/ictv-chanel.png";
import twentyFourth from "../../../assets/images/24-chanel.png";
import onePlusOne from "../../../assets/images/1+1-chanel.png";
import { NewsBlock } from "./NewsBlock";
import { Container } from "@mui/material";

const newsList = [
  {
    icon: ain,
    description:
      "Битва з чергами: як сервіс beHealth за два роки виріс з 7 до 23 000 пацієентів на день",
  },
  {
    icon: ictv,
    description:
      "Медреформа: від класичних черг до запису онлайн за 2 хвилини, в сюжеті Вікна-новини.",
  },
  {
    icon: twentyFourth,
    description:
      "До електронного реєстру підключили перший центр медико-санітарної допомоги.",
  },
  {
    icon: onePlusOne,
    description:
      "Старт медичної реформи надав можливість онлайн запису до лікарів первинної ланки.",
  },
];

export const NewsList = () => {
  return (
    <Container sx={{ display: "flex", gap: "32px", mb: "120px" }}>
      {newsList.map((news) => (
        <NewsBlock key={news.description} news={news} />
      ))}
    </Container>
  );
};
