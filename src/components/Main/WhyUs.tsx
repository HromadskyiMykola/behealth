import React from "react";
import { Box, Container, Typography, List } from "@mui/material";
import background from "../../assets/images/why-us-background.png";
import { ADVANTAGES_LIST, WHY_PEOPLE_CHOOSE_BEHEALTH } from "./main.constants";
import { AdvantagesItem } from "./AdvantagesItem";
import { WhyUsContent } from "./WhyUsContent";

export const WhyUs = () => {
  return (
    <Box
      p={{ xs: "41px 0 138px 0", md: "106px 0 156px 0" }}
      sx={{
        backgroundImage: `url(${background})`,
        display: "flex",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        sx={{
          display: "flex",
          gap: {
            xs: "27px",
            sm: "88px",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Box>
          <WhyUsContent items={WHY_PEOPLE_CHOOSE_BEHEALTH} />
        </Box>
        <Box sx={{ color: "#00382A" }}>
          <Typography
            sx={{
              borderBottom: "2px solid #3ABD98",
              pb: "4px",
              mb: "48px",
              typography: {
                xs: "subtitle1",
                sm: "h5",
              },
            }}
          >
            Переваги сервісу
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {ADVANTAGES_LIST.map(({ title, description }) => (
              <AdvantagesItem
                key={title}
                title={title}
                description={description}
              />
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
};
