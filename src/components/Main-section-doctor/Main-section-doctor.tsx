import React from "react";
import Paper from "@mui/material/Paper";
import HeaderSection from "~/components/Main-section-doctor/Header-section";
import Box from "@mui/material/Box";
import AdmissionRulesDoctor from "~/components/Main-section-doctor/Admission-rules-doctor";
import { RatingDoctor } from "~/components/Main-section-doctor/Rating-doctor";

export const MainSectionDoctor = () => {
  return (
    <Paper>
      <Box p="32px">
        <HeaderSection />
        <AdmissionRulesDoctor />
        <RatingDoctor />
      </Box>
    </Paper>
  );
};
