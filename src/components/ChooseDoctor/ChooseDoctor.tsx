import React from "react";
import { Grid, Box, Typography, Container, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import {
  Ear,
  Baby,
  HeartPulse,
  Hand,
  Syringe,
  Stethoscope,
  Tablets,
} from "lucide-react";
const chooseDoctor: any = [
  {
    id: 1,
    icon: <Ear color={"#F4FFF8"} width={36} height={36} />,
    name: "Отоларинголог",
    count: 125,
  },
  {
    id: 2,
    icon: <Baby color={"#F4FFF8"} width={36} height={36} />,
    name: "Лікар Педіатр",
    count: 40,
  },
  {
    id: 3,
    icon: <Ear color={"#F4FFF8"} width={36} height={36} />,
    name: "Гінеколог",
    count: 286,
  },
  {
    id: 4,
    icon: <Stethoscope color={"#F4FFF8"} width={36} height={36} />,
    name: "Сімейний лікар",
    count: 286,
  },
  {
    id: 5,
    icon: <HeartPulse color={"#F4FFF8"} width={36} height={36} />,
    name: "Кардіолог",
    count: 141,
  },
  {
    id: 6,
    icon: <Hand color={"#F4FFF8"} width={36} height={36} />,
    name: "Дерматовенеролог",
    count: 148,
  },
  {
    id: 7,
    icon: <Syringe color={"#F4FFF8"} width={36} height={36} />,
    name: "Терапевт",
    count: 263,
  },
  {
    id: 8,
    icon: <Ear color={"#F4FFF8"} width={36} height={36} />,
    name: "Гастроентеролог",
    count: 113,
  },
  {
    id: 9,
    icon: <Tablets color={"#F4FFF8"} width={36} height={36} />,
    name: "Психіатр",
    count: 81,
  },
];

export const ChooseDoctor = () => {
  return (
    <Box sx={{ p: "120px 0", background: "#f7fcf9" }}>
      <Container>
        <Box
          sx={{ mb: "64px", display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant={"h4"} sx={{ color: "#00382A" }}>
            Оберіть лікаря
          </Typography>
          <Link
            to={"/doctors"}
            style={{
              display: "flex",
              gap: "8px",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <Typography variant={"body2"} sx={{ color: "#09A480" }}>
              Переглянути усіх лікарів
            </Typography>
            <IconButton>
              <ArrowForwardIosRounded
                sx={{ color: "#09A480" }}
                fontSize={"small"}
              />
            </IconButton>
          </Link>
        </Box>
        <Box>
          <Grid container columnSpacing={8} rowSpacing={4}>
            {chooseDoctor.map(({ name, count, id, icon }: any) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: "12px",
                    background: "#FFFFFF",
                    border: "1px solid #00513E",
                    boxShadow: "0px 1px 10px rgba(9, 164, 128, 0.1)",
                    borderRadius: "12px",
                    width: "448px",
                    height: "64px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", gap: "16px", alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        background: "#00513E",
                        width: "64px",
                        height: "64px",
                        borderTopLeftRadius: "12px",
                        borderBottomLeftRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {icon}
                    </Box>
                    <Typography variant={"subtitle1"} sx={{ color: "#00513E" }}>
                      {name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "8px", alignItems: "center" }}
                  >
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                      <Typography variant={"caption"} sx={{ color: "#7D968B" }}>
                        {count} лікарів
                      </Typography>
                      <IconButton>
                        <ArrowForwardIosRounded sx={{ color: "#00513E" }} />
                      </IconButton>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
