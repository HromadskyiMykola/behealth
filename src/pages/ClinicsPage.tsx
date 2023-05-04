import { Helmet } from "react-helmet";

import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

import {
  BreadcrumbsUkr,
  PaginationBottomBar,
  SelectTopBar,
  SkeletonInfoCards,
} from "~/components/atomic";
import { SelectedItemsBox } from "~/components/AsideFilter";

import { FilterClinics, SearchClinics, Clinics } from "~/components/clinic";

const data = [
  { key: 0, label: "Приватна клініка" },
  { key: 1, label: "Державна клініка" },
  { key: 2, label: "Повна клініка :)" },
];

export const ClinicsPage = () => {
  const { primary20 } = useTheme().palette.custom;

  return (
    <>
      <Helmet>
        <title>Клініки - BeHealth</title>
        <meta
          name="description"
          content="Сторінка переліку клінік на сайті BeHealth."
        />
      </Helmet>

      <Container sx={{ mt: "30px", mb: "60px" }}>
        <BreadcrumbsUkr />

        <Typography
          variant="h4"
          color={primary20}
          sx={{ mt: "26px", mb: "32px" }}
        >
          Клініки
        </Typography>

        <SearchClinics />

        <Stack direction="row" gap="32px" sx={{ mt: "32px" }}>
          <Box sx={{ flex: "0 1 328px" }}>
            <SelectedItemsBox />

            <FilterClinics />
          </Box>

          <Box sx={{ flex: "1 0 auto", maxWidth: "1000px" }}>
            {/* <SelectTopBar />   TODO:   */}

            {/* {clinics.length === 0 && <SkeletonInfoCards />} */}

            <Clinics />

            <PaginationBottomBar />
          </Box>
        </Stack>
      </Container>
    </>
  );
};
