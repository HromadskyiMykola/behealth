import React from "react";
import { Container } from "@mui/material";
import { ClinicInfoPage } from "~/components/clinic/ClinicInfoPage";

export const ClinicsPage = () => {
  return (
    <Container>
      Clinics
      <ClinicInfoPage />
    </Container>
  );
};
