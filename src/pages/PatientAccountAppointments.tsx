import { Box, Skeleton } from "@mui/material";

import {
  ProfileAppointmentPage,
  ProfileAppointmentDetails,
} from "~/components/ProfileAppointment";
import { useLocation, useParams } from "react-router-dom";


export function PatientAccountAppointments() {
  const { id } = useParams();
  // for demo
  return (
    <>
      {id ? <ProfileAppointmentDetails /> : <ProfileAppointmentPage />}
      {/*<CustomizedPaper>*/}
      {/*  <Box sx={{ display: "flex", gap: 2 }}>*/}
      {/*    <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />*/}
      {/*    <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />*/}
      {/*  </Box>*/}
      {/*</CustomizedPaper>*/}
      {/*<CustomizedPaper>*/}
      {/*  <Box sx={{ display: "flex", gap: 2 }}>*/}
      {/*    <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />*/}
      {/*    <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />*/}
      {/*  </Box>*/}
      {/*</CustomizedPaper>*/}
      {/*<CustomizedPaper>*/}
      {/*  <Box sx={{ display: "flex", gap: 2 }}>*/}
      {/*    <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />*/}
      {/*    <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />*/}
      {/*  </Box>*/}
      {/*</CustomizedPaper>*/}
      {/*<CustomizedPaper>*/}
      {/*  <Box sx={{ display: "flex", gap: 2 }}>*/}
      {/*    <Skeleton variant="rounded" sx={{ height: 100, width: 100 }} />*/}
      {/*    <Skeleton variant="rounded" sx={{ height: 150, width: "100%" }} />*/}
      {/*  </Box>*/}
      {/*</CustomizedPaper>*/}
    </>
  );
}
