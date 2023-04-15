import React from "react";
import AdditionDataContainer from "../components/tads.additionalData/Addition-data-container";
import HeaderCardDoctor from "~/components/Header-card-doctor/Header-card-doctor";
import Container from "@mui/material/Container";

export function DoctorsPage() {
  return (
    <div>
      <Container>
        <HeaderCardDoctor />
      </Container>
    </div>
  );
}
