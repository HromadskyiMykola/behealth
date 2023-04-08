import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ProfileAppointmentDetailsNavigationProps } from "~/common/types-and-interfaces";

export const ProfileAppointmentDetailsNavigation: FC<
  ProfileAppointmentDetailsNavigationProps
> = ({ navigation, setTargetButton, targetButton }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "32px",
        borderBottom: "1px solid #B2CCC0",
      }}
    >
      {navigation.map(({ title }, index) => (
        <Typography
          key={title}
          onClick={() => setTargetButton(index)}
          variant="caption"
          sx={{
            color: targetButton === index ? "#3ABD98" : "#1E352D",
            borderBottom: targetButton === index ? "1px solid #3ABD98" : "none",
            textDecoration: "none",
            padding: "8px 0",
            cursor: "pointer",
            "&:hover": {
              color: "#3ABD98",
              borderBottom: "1px solid #3ABD98",
            },
          }}
        >
          {title}
        </Typography>
      ))}
    </Box>
  );
};
