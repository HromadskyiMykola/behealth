import { MainSectionDoctor } from "~/components/Main-section-doctor";
import HeaderCardDoctor from "~/components/Header-card-doctor/Header-card-doctor";
import {
  BreadcrumbsUkr,
  PaginationBottomBar,
  SelectTopBar,
} from "~/components/atomic";
import { Box, Container, Stack, Typography } from "@mui/material";
import { SearchBar } from "~/components/doctorsPage";
import { SmallCardDoctor } from "~/components/Small-card-doctor/Small-card-doctor";
import { ClinicInfo } from "~/components/clinic";

export function DoctorPage() {
  return (
    <Container sx={{ mt: "30px", mb: "60px" }}>
      <BreadcrumbsUkr />
      <Stack sx={{ mt: "32px" }} spacing={2}>
        <HeaderCardDoctor />
        <MainSectionDoctor />
      </Stack>
    </Container>
  );
}
