import React from "react";
import { Grid, Box, Typography, Container, IconButton } from "@mui/material";
import { MUILink } from "./MUILink";
import { CHOOSE_DOCTORS_LIST } from "./choose.doctors.constants";
import { IChooseDoctor } from "../../common/types_and_interfaces";
import { ChooseDoctorsList } from "./ChooseDoctorsItem";

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
          <MUILink path={"/doctors"} text={"Переглянути усіх лікарів"} />
        </Box>
        <Box>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "0",
              "& > :first-of-type": {
                paddingLeft: 0,
              },

              "& > :nth-of-type(3n + 1)": {
                paddingLeft: 0,
              },
            }}
          >
            {CHOOSE_DOCTORS_LIST.map((doctor: IChooseDoctor) => (
              <ChooseDoctorsList key={doctor.id} doctor={doctor} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
