import { useTheme, Typography, Stack } from "@mui/material";

import { TOnSubmitAdditionalData, TPatientAdditionalData } from "~/common";

interface Props {
  onSubmitAdditionalData: TOnSubmitAdditionalData;
  patientAdditionalData: TPatientAdditionalData | null;
}

export const PatientAdditionalDataPrefCat = ({
  patientAdditionalData,
}: Props) => {
  const { custom } = useTheme().palette;

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Пільгові категорії</Typography>

      <Typography variant="body2" color={custom.secondary80}>
        {patientAdditionalData?.eligibleCat
          ? `${patientAdditionalData.eligibleCat}`
          : "Пільгові категорії відсутні."}
      </Typography>
    </Stack>
  );
};
