import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";

import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

import {
  BreadcrumbsUkr,
  CustomizedPaper,
  PaginationBottomBar,
  SelectTopBar,
  SkeletonInfoCards,
} from "~/components/atomic";
import { SelectedItemsBox } from "~/components/AsideFilter";

import {
  FilterClinics,
  SearchClinics,
  SmallClinicCard,
} from "~/components/clinic";

import { FilterViewMode } from "~/components/AsideFilter";
import { SearchBar } from "~/components/doctorsPage";
import { SmallCardDoctor } from "~/components/Small-card-doctor/Small-card-doctor";

import { useDataContext } from "~/providers";
import { useDeviceType } from "~/hooks";

const QTY = 5;

export const ClinicsPage = () => {
  const { custom } = useTheme().palette;
  const { isWidth600, isMdDown } = useDeviceType();

  const { clinics, filteredClinics, setFilteredClinics } = useDataContext();
  const [page, setPage] = useState(1);

  const count = useMemo(
    () => Math.ceil(filteredClinics.length / QTY),
    [filteredClinics]
  );

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
          color={custom.primary20}
          sx={{
            mt: { xs: "16px", sm: "26px" },
            mb: { xs: "16px", sm: "32px" },
          }}
        >
          Клініки
        </Typography>

        <SearchClinics />

        <Stack
          direction="row"
          gap="32px"
          sx={{ mt: { xs: "16px", sm: "32px" } }}
        >
          {!isMdDown && <FilterViewMode modeType="clinic" />}

          <Box>
            {/* <SelectTopBar setFilteredData={setFilteredClinics} /> */}

            {isMdDown && <FilterViewMode modeType="clinic" />}

            {clinics.length === 0 && <SkeletonInfoCards />}

            {filteredClinics.length > 0 &&
              filteredClinics
                .slice(page - 1, page - 1 + QTY)
                .map((clinic, i) => (
                  <SmallClinicCard
                    key={`doc${clinic.id}-${i}`}
                    clinic={clinic}
                  />
                ))}

            <CustomizedPaper
              sx={{
                mt: { xs: "16px", sm: "24px" },
                p: { xs: "14px 16px", sm: "16px 32px" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PaginationBottomBar count={count} setPage={setPage} />
            </CustomizedPaper>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
