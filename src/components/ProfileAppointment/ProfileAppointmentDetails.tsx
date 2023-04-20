import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { ProfileAppointmentListItem } from "~/components/ProfileAppointment/ProfileAppointmentListItem";
import {
  PROFILE_APPOINTMENT,
  PROFILE_APPOINTMENT_DETAILS_INFO,
} from "~/components/ProfileAppointment/profile-appointment.constants";
import { ProfileAppointmentDetailsInfoCard } from "~/components/ProfileAppointment/ProfileAppointmentDetailsInfoCard";
import { useParams } from "react-router-dom";
import { IProfileAppointmentCard } from "~/common";

export const ProfileAppointmentDetails = () => {
  const [value, setValue] = React.useState<number>(0);
  const [card, setCard] = useState<IProfileAppointmentCard | null>(null);
  const { id } = useParams();

  const { visitInfo, medicalRecords } = PROFILE_APPOINTMENT_DETAILS_INFO;

  useEffect(() => {
    PROFILE_APPOINTMENT.cards.map((item) => {
      if (item.id.toString() === id) {
        setCard(item);
      }
    });
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            borderBottom: " 1px solid #B2CCC0",
            "& .MuiTab-root": { padding: 0 },
            "& .MuiTabs-flexContainer": {
              display: "flex",
              gap: "32px",
            },
            "& .MuiTabs-indicator": { height: "1px" },
            "& button": {
              color: "#1E352D",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "22px",
            },
          }}
        >
          <Tab label="Дані прийому" />
          <Tab label="Додані медзаписи" />
        </Tabs>
        {(value === 0 ? visitInfo : medicalRecords).map(
          ({ details, title, code, subtitle }) => (
            <ProfileAppointmentDetailsInfoCard
              key={title}
              details={details || []}
              title={title}
              code={code}
              subtitle={subtitle}
            />
          )
        )}
      </Box>
    </Box>
  );
};
