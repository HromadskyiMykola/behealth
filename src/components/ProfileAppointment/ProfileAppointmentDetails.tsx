import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ProfileAppointmentListItem } from "~/components/ProfileAppointment/ProfileAppointmentListItem";
import { ProfileAppointmentDetailsNavigation } from "~/components/ProfileAppointment/ProfileAppointmentDetailsNavigation";
import {
  PROFILE_APPOINTMENT,
  PROFILE_APPOINTMENT_DETAILS_INFO,
  PROFILE_APPOINTMENT_DETAILS_INFO_NAVIGATION,
} from "~/components/ProfileAppointment/profile-appointment.constants";
import { ProfileAppointmentDetailsInfoCard } from "~/components/ProfileAppointment/ProfileAppointmentDetailsInfoCard";
import { useParams } from "react-router-dom";
import { IProfileAppointmentCard } from "~/common";

export const ProfileAppointmentDetails = () => {
  const { visitInfo, medicalRecords } = PROFILE_APPOINTMENT_DETAILS_INFO;
  const [targetButton, setTargetButton] = useState<number>(0);
  const [card, setCard] = useState<IProfileAppointmentCard | null>(null);
  const { id } = useParams();

  useEffect(() => {
    PROFILE_APPOINTMENT.cards.map((item) => {
      if (item.id.toString() === id) {
        setCard(item);
      }
    });
  }, []);

  return (
    <Box>
      <Box sx={{ mb: "16px" }}>
        {card && (
          <ProfileAppointmentListItem
            border="none"
            bgcolor="#fff"
            card={card}
          />
        )}
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
          setTargetButton={setTargetButton}
          targetButton={targetButton}
          navigation={PROFILE_APPOINTMENT_DETAILS_INFO_NAVIGATION}
        />
        {targetButton === 0 ? (
          <>
            {visitInfo.map(({ details, title, code, subtitle }) => (
              <ProfileAppointmentDetailsInfoCard
                key={title}
                details={details || []}
                title={title}
                code={code}
                subtitle={subtitle}
              />
            ))}
          </>
        ) : (
          <>
            {medicalRecords.map(({ details, title, code, subtitle }) => (
              <ProfileAppointmentDetailsInfoCard
                key={title}
                details={details || []}
                title={title}
                code={code}
                subtitle={subtitle}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};
