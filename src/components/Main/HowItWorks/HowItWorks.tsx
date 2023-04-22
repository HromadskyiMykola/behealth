import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CardsList } from "./CardsList";

export const HowItWorks = () => {
  return (
    <Box pb={{ xs: 5, md: 15 }} bgcolor="#f7fcf9">
      <Container>
        <Typography
          sx={{
            mb: "16px",
            textAlign: "left",
            typography: {
              xs: "subtitle1",
              md: "h4",
            },
          }}
        >
          Як працює сервіс?
        </Typography>
        <Typography
          sx={{
            mb: {
                xs: "41px",
                md: "64px",
            },
            textAlign: "left",
            typography: {
              xs: "body2",
              md: "body1",
            },
          }}
        >
          Спробувавши наш онлайн сервіс, вам не захочеться повертатися до черги.
        </Typography>
        <CardsList />
      </Container>
    </Box>
  );
};
