import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { CardsList } from "./CardsList";

export const HowItWorks = () => {
  return (
    <Box sx={{ pb: "120px", background: "#f7fcf9" }}>
      <Container>
        <Typography variant={"h4"} sx={{ mb: "16px", textAlign: "left" }}>
          Як працює сервіс?
        </Typography>
        <Typography variant={"body1"} sx={{ mb: "64px", textAlign: "left" }}>
          Спробувавши наш онлайн сервіс, вам не захочеться повертатися до черги.
        </Typography>
        <CardsList />
      </Container>
    </Box>
  );
};
