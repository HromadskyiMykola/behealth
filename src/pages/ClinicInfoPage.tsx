import React from "react";
import { ClinicInfo } from "~/components/clinic";
import { Container, Stack } from "@mui/material";
import { BreadcrumbsUkr } from "~/components/atomic";

export const ClinicInfoPage = () => {
  return (
    <Container sx={{ mt: "30px", mb: "60px" }}>
      <BreadcrumbsUkr />
      <Stack sx={{ mt: "32px" }}>
        <ClinicInfo />
      </Stack>
    </Container>
  );
};
