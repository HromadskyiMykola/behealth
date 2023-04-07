import React from "react";
import { Container } from "@mui/material";
import {
  ProfileAppointmentMedicalRecords,
  ProfileAppointmentPage,
  ProfileAppointmentVisitInfo,
} from "../components/ProfileAppointment";
import { PROFILE_APPOINTMENT } from "../components/ProfileAppointment/profile-appointment.constants";
import { DatePickerInput } from "~/components/atomic";

export const ClinicsPage = () => {
  return (
    <Container>
      Clinics
      <ProfileAppointmentPage />
      {/*<ProfileAppointmentMedicalRecords card={PROFILE_APPOINTMENT.cards[0]} />*/}
      <ProfileAppointmentVisitInfo card={PROFILE_APPOINTMENT.cards[0]} />
    </Container>
  );
};


