import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { CircleDot, CheckCircle, CircleSlashed } from "lucide-react";
import {ProfileAppointmentStatusProps} from "../../common/types_and_interfaces";

export const ProfileAppointmentStatus: FC<ProfileAppointmentStatusProps> = ({
  status,
}) => {
  let color: string = "";
  let bgcolor: string = "";
  let icon: JSX.Element = <></>;

  switch (status) {
    case "Завершено":
      color = "#597C8F";
      bgcolor = "#E2F3FF";
      icon = <CheckCircle color={color} size="16" />;
      break;
    case "Скасовано":
      color = "#DE3730";
      bgcolor = "#FFEDEA";
      icon = <CircleSlashed color={color} size="16" />;
      break;
    default:
      color = "#5C5F5D";
      bgcolor = "#EFF1EE";
      icon = <CircleDot color={color} size="16" />;
      break;
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        p: "4px 8px",
        bgcolor: bgcolor,
        borderRadius: "8px",
      }}
    >
      {icon}
      <Typography sx={{ color: color }} variant="caption">
        {status}
      </Typography>
    </Box>
  );
};
