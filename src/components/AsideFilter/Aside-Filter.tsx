import { Divider, Stack, Typography, useTheme } from "@mui/material";

import {
  SelectDistrict,
  ClinicType,
  DoctorAdditionalOptions,
  PaymentForServices,
  PatientEvaluation,
  GenderOfDoctor,
  DoctorQualifications,
  RangeCost,
  RangeExperience,
} from "./";

import { useDataContext } from "~/providers";

export const AsideFilter = () => {
  const { palette, typography } = useTheme();

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
    <Stack gap="32px">
      <Typography variant="h5" color={palette.custom.primary20}>
        Фільтр
      </Typography>

      <SelectDistrict  />

      <Stack gap="24px">
        <ClinicType  />

        <Divider />

        <DoctorAdditionalOptions  />

        <Divider />

        <PaymentForServices />

        <RangeCost />

        <Divider />

        <GenderOfDoctor />

        <Divider />

        <RangeExperience optionsData={optionsData} />

        <Divider />

        <PatientEvaluation />
      </Stack>

      <DoctorQualifications  />
    </Stack>
  );
};
