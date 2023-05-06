import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TDoctor } from "~/common";

export const NameAndInfoAboutDoctor = ({ doctor }: { doctor: TDoctor }) => {
  const { custom } = useTheme().palette;
  const navigate = useNavigate();

  const { id, speciality, experience, name } = doctor;

  return (
    <Box display="flex" gap="4px" flexDirection="column">
      {/*//todo add rest data*/}
      <Typography variant="body2" component="p" color={custom.primary80}>
        {speciality}
      </Typography>

      <Typography
        variant="h5"
        component="p"
        onClick={() => navigate(`/doctors/${id}`)}
        sx={{ cursor: "pointer" }}
      >
        {name}
      </Typography>

      <Box pt="14px">
        <Typography variant="body2" component="span" color={custom.neutral60}>
          Стаж років:
        </Typography>

        <Typography
          variant="subtitle2"
          component="span"
          color={custom.neutral60}
          ml={0.5}
        >
          {experience}
        </Typography>
      </Box>
    </Box>
  );
};
