import React, { FC } from "react";
import { PROFILE_APPOINTMENT_FILTER_BUTTONS } from "./profile-appointment.constants";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { ButtonsFilteringProps } from "../../common/types_and_interfaces";

export const ButtonsFiltering: FC<ButtonsFilteringProps> = ({
  CardsFiltering,
  activeButton,
}) => {
  return (
    <Box sx={{ display: "flex", gap: "12px", mb: "24px" }}>
      {PROFILE_APPOINTMENT_FILTER_BUTTONS.map((name: string, index) => (
        <Button
          data-button-id={index}
          onClick={CardsFiltering}
          key={name}
          variant={activeButton === index.toString() ? "contained" : "outlined"}
        >
          <Typography variant="button">{name}</Typography>
        </Button>
      ))}
    </Box>
  );
};
