import React from "react";
import Paper from "@mui/material/Paper";
import HeaderSection from "~/components/Main-section-doctor/Header-section";
import Box from "@mui/material/Box";
import AdmissionRulesDoctor from "~/components/Main-section-doctor/Admission-rules-doctor";
import { RatingDoctor } from "~/components/Main-section-doctor/Rating-doctor";
import Stack from "@mui/material/Stack";
import { TDoctor } from "~/common";

export const MainSectionDoctor = ({ doctor }: { doctor: TDoctor }) => {
  return (
    <Paper>
      <Stack p="32px" spacing={8}>
        <HeaderSection doctor={doctor}/>
        <AdmissionRulesDoctor doctor={doctor}/>
        <RatingDoctor doctor={doctor}/>
      </Stack>
    </Paper>
  );
};
