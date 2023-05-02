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



export const AsideFilter = () => {
  const { palette, typography } = useTheme();

  return (
    <Stack gap="32px">
      <Typography variant="h5" color={palette.custom.primary20}>
        Фільтр
      </Typography>

      <SelectDistrict />

      <Stack gap="24px">
        <ClinicType />

        <Divider />

        <DoctorAdditionalOptions />

        <Divider />

        <PaymentForServices />

        <RangeCost />

        <Divider />

        <GenderOfDoctor />

        <Divider />

        <RangeExperience />

        <Divider />

        <PatientEvaluation />
      </Stack>

      <DoctorQualifications />
    </Stack>
  );
};
