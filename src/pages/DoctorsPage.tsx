import { Helmet } from "react-helmet";

import {
  Box,
  Container,
  Paper,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import {
  BreadcrumbsUkr,
  CustomizedPaper,
  PaginationBottomBar,
  SelectedItemsBox,
  SelectTopBar,
} from "~/components/atomic";

import { FilterDoctors, SearchBar } from "~/components/doctorsPage";
import { SmallCardDoctor } from "~/components/Small-card-doctor/Small-card-doctor";

import { useDoctorsData } from "~/hooks";

const data: any = [
  { key: 0, label: "Приватна клініка" },
  { key: 1, label: "Добре" },
  { key: 2, label: "Дуже добре" },
  { key: 3, label: "Вища освіта" },
  { key: 4, label: "Бімба! :)" },
];

export const DoctorsPage = () => {
  const { palette } = useTheme();

  const { doctors, filteredDoctors, setFilteredDoctors, filter, setFilter } =
    useDoctorsData();

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

        <SearchBar doctors={doctors} setFilteredDoctors={setFilteredDoctors} />

        <Stack direction="row" gap="32px" sx={{ mt: "32px" }}>
          <Box sx={{ flex: "0 1 328px" }}>
            <CustomizedPaper sx={{ p: "24px 24px 32px 24px" }}>
              <SelectedItemsBox data={data} />
            </CustomizedPaper>

            <CustomizedPaper sx={{ p: "24px 24px 32px 24px" }}>
              <FilterDoctors />
            </CustomizedPaper>
          </Box>

          <Box sx={{ flex: "1 0 auto" }}>
            <SelectTopBar setFilteredData={setFilteredDoctors} />

            {doctors.length === 0 &&
              [...Array(3)].map((_, i) => (
                <CustomizedPaper key={"skeleton" + i}>
                  <Stack direction="row" gap={2}>
                    <Skeleton
                      variant="rounded"
                      sx={{ height: 132, width: 168 }}
                    />
                    <Skeleton
                      variant="rounded"
                      sx={{ height: 300, width: "100%" }}
                    />
                  </Stack>
                </CustomizedPaper>
              ))}

            {filteredDoctors.length > 0 &&
              filteredDoctors.map((doctor, i) => (
                <SmallCardDoctor key={`${doctor.id}-${i}`} doctor={doctor} />
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
