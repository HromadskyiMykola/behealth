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
  ClinicAdditionalOptions,
} from "./";

type TProps = { modeType: "doctor" | "clinic" };
export const AsideFilter = ({ modeType }: TProps) => {
  const { custom } = useTheme().palette;

  const isDoctorMode = modeType === "doctor";
  const isClinicMode = modeType === "clinic";

  return (
    <Stack gap="32px">
      <Typography
        variant="h5"
        color={custom.primary20}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        Фільтр
      </Typography>

      <SelectDistrict />

      <Stack gap="24px">
        <ClinicType />

        <Divider />

        {isClinicMode && <ClinicAdditionalOptions />}

        {isDoctorMode && <DoctorAdditionalOptions />}

        {isDoctorMode && <Divider />}

        {isDoctorMode && <PaymentForServices />}

        {isDoctorMode && <RangeCost />}

        {isDoctorMode && <Divider />}

        {isDoctorMode && <GenderOfDoctor />}

        {isDoctorMode && <Divider />}

        {isDoctorMode && <RangeExperience />}

        {isDoctorMode && <Divider />}

        {isDoctorMode && <PatientEvaluation />}
      </Stack>

      {isDoctorMode && <DoctorQualifications />}
    </Stack>
  );
};
