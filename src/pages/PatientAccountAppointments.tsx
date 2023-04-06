import { Box, Skeleton } from "@mui/material";

import { CustomizedPaper } from "~atomic/index";

export function PatientAccountAppointments() {
  // for demo
  return (
    <>
      <CustomizedPaper>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />
          <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
        </Box>
      </CustomizedPaper>
      <CustomizedPaper>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />
          <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
        </Box>
      </CustomizedPaper>
      <CustomizedPaper>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />
          <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
        </Box>
      </CustomizedPaper>
      <CustomizedPaper>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />
          <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />
        </Box>
      </CustomizedPaper>
    </>
  );
}
