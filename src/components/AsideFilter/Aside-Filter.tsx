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

import { TOptionsData } from "~/common";

export const AsideFilter = ({ optionsData }: { optionsData: TOptionsData }) => {
  const { palette, typography } = useTheme();

  return (
    <Stack gap="32px">
      <Typography variant="h5" color={palette.custom.primary20}>
        Фільтр
      </Typography>

      <SelectDistrict optionsData={optionsData} />

      <Stack gap="24px">
        <ClinicType />

        <Divider />

        <DoctorAdditionalOptions />

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

      <DoctorQualifications optionsData={optionsData} />
    </Stack>
  );
};
