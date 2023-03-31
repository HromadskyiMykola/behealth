import React from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  Grid,
  List,
} from "@mui/material";
import background from "../../assets/images/why-us-background.png";
import {
  ADVANTAGES_LIST,
  WHY_PEOPLE_CHOOSE_BEHEALTH,
} from "./advantages.constants";
import { AdvantagesItem } from "./AdvantagesItem";
import { WhyUsContent } from "./WhyUsContent";

export const WhyUs = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        mb: "120px",
        p: "106px 0 156px 0",
        display: "flex",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        sx={{ display: "flex", justifyContent: "space-between", gap: "88px" }}
      >
        <Box>
          <WhyUsContent items={WHY_PEOPLE_CHOOSE_BEHEALTH} />
        </Box>
        <Box sx={{ color: "#00382A" }}>
          <Typography
            sx={{ borderBottom: "2px solid #3ABD98", pb: "4px", mb: "48px" }}
            variant="h5"
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
