import React from "react";
import { Container } from "@mui/material";
import { ClinicCard } from "~/components/clinicCard";
import {CLINIC_CARD} from "~/components/clinicCard/clinic-card-constants";

export const ClinicsPage = () => {
  return (
    <Container>
      Clinics
      <ClinicCard card={CLINIC_CARD} />
    </Container>
  );
};
