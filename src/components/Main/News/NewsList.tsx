import React from "react";
import { NewsBlock } from "./NewsBlock";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { newsList } from "~/components/Main/main.constants";

export const NewsList = () => {
  return (
    <Container
      sx={{
        my: {
          xs: "30px",
          md: "120px",
        },
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {newsList.map((news) => (
          <Grid lg={3} sm={6} item key={news.description}>
            <NewsBlock news={news} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
