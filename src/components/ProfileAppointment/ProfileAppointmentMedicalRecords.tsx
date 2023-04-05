import React, { FC } from "react";
import {
  PROFILE_APPOINTMENT_DETAILS_INFO,
  PROFILE_APPOINTMENT_DETAILS_INFO_NAVIGATION,
} from "./profile-appointment.constants";
import { Box } from "@mui/material";
import { ProfileAppointmentListItem } from "./ProfileAppointmentListItem";
import { ProfileAppointmentDetailsNavigation } from "./ProfileAppointmentDetailsNavigation";
import { ProfileAppointmentDetailsInfoCard } from "./ProfileAppointmentDetailsInfoCard";
import { ProfileAppointmentDetailsProps } from "../../common/types_and_interfaces";

export const ProfileAppointmentMedicalRecords: FC<
  ProfileAppointmentDetailsProps
> = ({ card }) => {
  const { medicalRecords } = PROFILE_APPOINTMENT_DETAILS_INFO;

  return (
    <Box>
      <Box sx={{ mb: "16px" }}>
        <ProfileAppointmentListItem border="none" bgcolor="#fff" card={card} />
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
          p: "32px 32px 40px 32px",
          borderRadius: "12px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.02)",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <ProfileAppointmentDetailsNavigation
          navigation={PROFILE_APPOINTMENT_DETAILS_INFO_NAVIGATION}
        />

        {medicalRecords.map(({ details, title, code, subtitle }) => (
          <ProfileAppointmentDetailsInfoCard
            key={title}
            // @ts-ignore
            details={details}
            title={title}
            code={code}
            subtitle={subtitle}
          />
        ))}
      </Box>
    </Box>
  );
};