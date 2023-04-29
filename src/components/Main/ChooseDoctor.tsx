import React from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { MUILink } from "./MUILink";
import { CHOOSE_DOCTORS_LIST } from "./main.constants";
import { IChooseDoctor } from "~/common";
import { ChooseDoctorsList } from "./ChooseDoctorsItem";


export const ChooseDoctor = () => {
  return (
    <Box
      padding={{ xs: "38px 0 26px 0", md: "120px 0" }}
      sx={{
        background: "#f7fcf9",
      }}
    >
      <Container>
        <Box
          sx={{
            mb: {
              xs: "24px",
              md: "64px",
            },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#00382A",
              typography: {
                xs: "subtitle1",
                md: "h4",
              },
            }}
          >
            Оберіть лікаря
          </Typography>
          <MUILink path={"/doctors"} text={"Переглянути усіх лікарів"} />
        </Box>
        <Box>
          <Grid container spacing={4}>
            {CHOOSE_DOCTORS_LIST.map((doctor: IChooseDoctor) => (
              <Grid item xs={12} sm={6} md={4} key={doctor.id}>
                <ChooseDoctorsList doctor={doctor} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
