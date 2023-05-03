import { useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

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

import { TAsideFilterComps } from "~/common";

export const AsideFilter = ({
  optionsData,
  handleFilterChange,
}: TAsideFilterComps) => {
  const { palette, typography } = useTheme();

  const props = { optionsData, handleFilterChange };

  return (
    <Stack gap="32px">
      <Typography variant="h5" color={palette.custom.primary20}>
        Фільтр
      </Typography>

      <SelectDistrict {...props} />

      <Stack gap="24px">
        <ClinicType {...props} />

        <Divider />

        <DoctorAdditionalOptions {...props} />

        <Divider />

        <PaymentForServices />

        <RangeCost optionsData={optionsData} />

        <Divider />

        <GenderOfDoctor />

        <Divider />

        <RangeExperience optionsData={optionsData} />

        <Divider />

        <PatientEvaluation />
      </Stack>

      <DoctorQualifications {...props} />
    </Stack>
  );
};
