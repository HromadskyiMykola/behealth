import React, { FC } from "react";
import { Box } from "@mui/material";
import { ProfileAppointmentListItem } from "./ProfileAppointmentListItem";
import {
  IProfileAppointmentCard,
  ProfileAppointmentListProps,
} from "../../common/types_and_interfaces";

export const ProfileAppointmentList: FC<ProfileAppointmentListProps> = ({
  cards,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {cards.map((card: IProfileAppointmentCard) => (
        <ProfileAppointmentListItem
          border="1px solid #DBE5DF"
          bgcolor="#FBFDF9"
          key={card.id}
          card={card}
        />
      ))}
    </Box>
  );
};
