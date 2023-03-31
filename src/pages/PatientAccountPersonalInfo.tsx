import { Box, Skeleton, Typography } from "@mui/material";

import CustomizedPaper from "../components/Atomic/CustomizedPaper";

function PatientAccountPersonalInfo() {
  return (
    <>
      <CustomizedPaper>
        <Typography variant="h5">
          {"Контактна інформація та авторизація"}
        </Typography>
        <Box sx={{ mt: "24px", display: "flex", gap: 2 }}>
          <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />
          <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
        </Box>
      </CustomizedPaper>

      <CustomizedPaper>
        <Typography variant="h5">{"Персональні дані"}</Typography>
        <Skeleton variant="text" sx={{ height: 150 }} />
        <Typography variant="h5">
          {"Документи, що засвідчують особу"}
        </Typography>
        <Skeleton variant="text" />
      </CustomizedPaper>
    </>
  );
}

export default PatientAccountPersonalInfo;
