import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import {ProfileAppointmentDetailsNavigationProps} from "~/common/types-and-interfaces";

export const ProfileAppointmentDetailsNavigation: FC<
  ProfileAppointmentDetailsNavigationProps
> = ({ navigation }) => {
  const currentPath = window.location.pathname;
  return (
    <Box
      sx={{
        display: "flex",
        gap: "32px",
        borderBottom: "1px solid #B2CCC0",
      }}
    >
      {navigation.map(({ title, path }) => (
        <NavLink
          key={path}
          style={{
            textDecoration: "none",
            padding: "8px 0",
            borderBottom: currentPath === path ? "1px solid #3ABD98" : "none",
          }}
          to={path}
        >
          <Typography
            variant="caption"
            sx={{ color: currentPath === path ? "#3ABD98" : "#1E352D" }}
          >
            {title}
          </Typography>
        </NavLink>
      ))}
    </Box>
  );
};
