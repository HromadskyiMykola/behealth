import React from "react";
import { Container } from "@mui/material";
import { ClinicInfo } from "~/components/clinic/ClinicInfo";
import { Clinics } from "~/components/clinic/Clinics";

export const ClinicsPage = () => {
  return (
    <Container>
      Clinics
      <Clinics />
      <ClinicInfo />
    </Container>
  );
};
