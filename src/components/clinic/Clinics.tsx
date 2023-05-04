import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  CLINIC_CARD_LIST,
  IClinicCard,
} from "~/components/clinic/clinic-card-constants";
import { SmallClinicCard } from "~/components/clinic/SmallClinicCard";
import { TClinic, useApiService } from "~/common";

export const Clinics = () => {
  const [clinics, setClinics] = useState([]);
  const { getClinics } = useApiService();

  useEffect(() => {
    getClinics().then(setClinics);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {clinics.map((clinic: TClinic) => (
        <SmallClinicCard key={clinic.id} clinic={clinic} />
      ))}
    </Box>
  );
};
