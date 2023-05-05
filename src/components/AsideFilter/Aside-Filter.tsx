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

type TProps = { modeType: "doctor" | "clinic" };
export const AsideFilter = ({ modeType }: TProps) => {
  const { custom } = useTheme().palette;

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
