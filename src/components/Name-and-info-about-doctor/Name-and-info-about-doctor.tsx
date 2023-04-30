import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  specialty: string;
  experience: number;
  name: string;
};

export const NameAndInfoAboutDoctor = ({
  specialty,
  experience,
  name,
}: Props) => {
  const { custom } = useTheme().palette;
  const navigate = useNavigate();

  return (
    <Box display="flex" gap="4px" flexDirection="column">
      {/*//todo add rest data*/}
      <Typography variant="body2" component="p" color={custom.primary80}>
        {specialty}
      </Typography>

      <Typography
        variant="h5"
        component="p"
        onClick={() => navigate("1")}
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
