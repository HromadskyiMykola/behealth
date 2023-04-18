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

import {
  BreadcrumbsUkr,
  PaginationBottomBar,
  SelectedItemsBox,
  SelectTopBar,
} from "~/components/atomic";

import { FilterClinics, SearchClinics } from "~/components/clinic";
import { Clinics } from "~/components/clinic/Clinics";

const data = [
  { key: 0, label: "Приватна клініка" },
  { key: 1, label: "Державна клініка" },
  { key: 2, label: "Повна клініка :)" },
];

export const ClinicsPage = () => {
  const { palette } = useTheme();
  return (
    <Container sx={{ mt: "30px", mb: "60px" }}>
      <BreadcrumbsUkr />

      <Typography
        variant="h4"
        color={palette.custom.primary20}
        sx={{ mt: "26px", mb: "32px" }}
      >
        Клініки
      </Typography>

      <SearchClinics />

      <Stack direction="row" gap="32px" sx={{ mt: "32px" }}>
        <Box sx={{ flex: "0 1 328px" }}>
          <SelectedItemsBox data={data} />

          <FilterClinics />
        </Box>

        <Box sx={{ flex: "1 0 auto", maxWidth: "1000px" }}>
          <SelectTopBar />

          <Clinics />

          <PaginationBottomBar />
        </Box>
      </Stack>
    </Container>
  );
};
