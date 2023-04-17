import {
  Box,
  Container,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { BreadcrumbsUkr } from "~/components/atomic";

import {
    FilterDoctors,
  SearchBar,
  SelectBar,
  SelectedDoctors,
} from "~/components/doctorsPage";

import HeaderCardDoctor from "~/components/Header-card-doctor/Header-card-doctor";

export const DoctorsPage = () => {
  const { palette } = useTheme();
  return (
    <Container sx={{ mt: "30px", mb: "60px" }}>
      <BreadcrumbsUkr />

      <Typography
        variant="h4"
        color={palette.custom.primary20}
        sx={{ mt: "26px", mb: "32px" }}
      >
        Лікарі
      </Typography>

      <SearchBar />

      <Stack direction="row" gap="32px" sx={{ mt: "32px" }}>
        <Box sx={{ flex: "0 1 328px" }}>
                  <SelectedDoctors />
                  
                  <FilterDoctors/>
        </Box>

        <Box sx={{ flex: "1 0 auto", maxWidth: "1000px" }}>
          <SelectBar />

          <HeaderCardDoctor />
        </Box>
      </Stack>
    </Container>
  );
};
