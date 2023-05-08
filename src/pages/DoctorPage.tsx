import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Stack } from "@mui/material";

import { useDataContext } from "~/providers";
import { TDoctor } from "~/common";

import { MainSectionDoctor } from "~/components/Main-section-doctor";
import HeaderCardDoctor from "~/components/Header-card-doctor/Header-card-doctor";
import { BreadcrumbsUkr } from "~/components/atomic";

export function DoctorPage() {
  const { doctors } = useDataContext();
  const { id } = useParams();

  const [doctor, setClinic] = useState({} as TDoctor);

  useEffect(() => {
    const doctor = doctors.find(
      (doc) => String(doc.id) === id && doc.dataType === "doctor"
    );

    doctor && setClinic(doctor);
  }, [doctors, id]);

  return (
    <Container sx={{ mt: "30px", mb: "60px" }}>
      <BreadcrumbsUkr />

      <Stack sx={{ mt: "32px" }} spacing={2}>
        <HeaderCardDoctor doctor={doctor} />

        <MainSectionDoctor doctor={doctor} />
      </Stack>
    </Container>
  );
}
