import { Paper, Stack } from "@mui/material";

import HeaderSection from "~/components/Main-section-doctor/Header-section";
import AdmissionRulesDoctor from "~/components/Main-section-doctor/Admission-rules-doctor";
import { RatingDoctor } from "~/components/Main-section-doctor/Rating-doctor";
import { TDoctor } from "~/common";

export const MainSectionDoctor = ({ doctor }: { doctor: TDoctor }) => {
  return (
    <Paper>
      <Stack p="32px" spacing={8}>
        <HeaderSection doctor={doctor} />

        <AdmissionRulesDoctor doctor={doctor} />

        <RatingDoctor doctor={doctor} />
      </Stack>
    </Paper>
  );
};
