import { Helmet } from "react-helmet";

import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

import {
  BreadcrumbsUkr,
  CustomizedPaper,
  PaginationBottomBar,
  SelectTopBar,
  SkeletonInfoCards,
} from "~/components/atomic";

import { AsideFilter, SelectedItemsBox } from "~/components/AsideFilter";

// import { SearchBar } from "~/components/doctorsPage";

import { SearchBar } from "~/components/doctorsPage";
import { SmallCardDoctor } from "~/components/Small-card-doctor/Small-card-doctor";

// import { useDoctorsData } from "~/hooks";
import { useDataContext } from "~/providers";

const data: any = [
  { key: 0, label: "Приватна клініка" },
  { key: 1, label: "Добре" },
  { key: 2, label: "Дуже добре" },
  { key: 3, label: "Вища освіта" },
  { key: 4, label: "Бімба! :)" },
];

export const DoctorsPage = () => {
  const { palette } = useTheme();

  const {
    doctors,
    filteredDoctors,
    optionsData,
    setFilteredDoctors,
    selectedFilters,
    setSelectedFilters,
    handleFilterChange,
  } = useDataContext();

  return (
    <>
      <Helmet>
        <title>Лікарі - BeHealth</title>
        <meta
          name="description"
          content="Сторінка лікарів на сайті BeHealth."
        />
      </Helmet>

      <Container sx={{ mt: "30px", mb: "60px" }}>
        <BreadcrumbsUkr />

        <Typography
          variant="h4"
          color={palette.custom.primary20}
          sx={{ mt: "26px", mb: "32px" }}
        >
          Лікарі
        </Typography>

        <SearchBar
          doctors={doctors}
          optionsData={optionsData}
          setFilteredDoctors={setFilteredDoctors}
        />

        <Stack direction="row" gap="32px" sx={{ mt: "32px" }}>
          <Box sx={{ flex: "0 1 328px" }}>
            <CustomizedPaper sx={{ p: "24px 24px 32px 24px" }}>
              <SelectedItemsBox data={data} />
            </CustomizedPaper>

            <CustomizedPaper sx={{ p: "24px 24px 32px 24px" }}>
              <AsideFilter />
            </CustomizedPaper>
          </Box>

          <Box sx={{ flex: "1 0 auto" }}>
            <SelectTopBar setFilteredData={setFilteredDoctors} />

            {doctors.length === 0 && <SkeletonInfoCards />}

            {filteredDoctors.length > 0 &&
              filteredDoctors.map((doctor, i) => (
                <SmallCardDoctor key={`doc${doctor.id}-${i}`} doctor={doctor} />
              ))}

            <CustomizedPaper
              sx={{
                mt: "24px",
                p: "16px 32px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PaginationBottomBar />
            </CustomizedPaper>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
